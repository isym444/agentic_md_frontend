import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscribeSpeechService } from '../../../services/transcribe-speech/transcribe-speech.service';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-speech-capture',
  standalone: true,
  imports: [CommonModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './speech-capture.component.html',
  styleUrls: ['./speech-capture.component.css'] // Make sure to add the centering CSS here
})
export class SpeechCaptureComponent {
  isRecording = false;
  isLoading = false;
  transcription: string | null = null;

  private audioContext!: AudioContext;
  private mediaStream!: MediaStream;
  private processor!: ScriptProcessorNode;
  private audioData: Float32Array[] = [];

  constructor(private transcribeService: TranscribeSpeechService) {}

  /**
   * Main entry point for the big button in the template
   */
  async toggleRecording() {
    if (!this.isRecording) {
      await this.startRecording();
    } else {
      this.stopRecording();
    }
  }

  private async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaStream = stream;
      this.audioContext = new AudioContext();

      const input = this.audioContext.createMediaStreamSource(stream);
      // Using 4096 buffer size as defined in your logic
      this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);

      input.connect(this.processor);
      this.processor.connect(this.audioContext.destination);

      this.processor.onaudioprocess = (event) => {
        // Clone the channel data so it isn't cleared by the browser
        this.audioData.push(new Float32Array(event.inputBuffer.getChannelData(0)));
      };

      this.transcription = null;
      this.isRecording = true;
    } catch (err) {
      console.error('Could not start recording:', err);
    }
  }

  private stopRecording() {
    this.isRecording = false;
    this.isLoading = true; // Trigger the loading view immediately

    // Clean up Web Audio nodes
    if (this.processor) {
      this.processor.disconnect();
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
    }

    // Process the collected buffers
    if (this.audioData.length > 0) {
      const wavBlob = this.encodeWAV(this.audioData, this.audioContext.sampleRate || 44100);
      
      this.transcribeService.send(wavBlob).subscribe({
        next: (res) => {
          this.transcription = res.text;
          this.isLoading = false; // Hide loader when done
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        }
      });
    }

    // Reset buffer for next session
    this.audioData = [];
  }

  /* ... encodeWAV and writeString methods remain as you provided ... */
  private encodeWAV(buffers: Float32Array[], sampleRate: number): Blob {
    const length = buffers.reduce((acc, b) => acc + b.length, 0);
    const result = new Float32Array(length);
    let offset = 0;
    buffers.forEach(b => {
      result.set(b, offset);
      offset += b.length;
    });

    const buffer = new ArrayBuffer(44 + result.length * 2);
    const view = new DataView(buffer);

    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + result.length * 2, true);
    this.writeString(view, 8, 'WAVE');
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    this.writeString(view, 36, 'data');
    view.setUint32(40, result.length * 2, true);

    let pos = 44;
    for (let i = 0; i < result.length; i++) {
      const s = Math.max(-1, Math.min(1, result[i]));
      view.setInt16(pos, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      pos += 2;
    }
    return new Blob([view], { type: 'audio/wav' });
  }

  private writeString(view: DataView, offset: number, str: string) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }
}