import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranscribeSpeechService {

  constructor(private http: HttpClient) {}

  send(wavBlob: Blob): Observable<any> {
    const formData = new FormData();
    const BASE_URL = "http://127.0.0.1:8000"
    formData.append('file', wavBlob, 'recording.wav');

    return this.http.post(BASE_URL + '/transcribe', formData);
  }
}