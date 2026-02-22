import { TestBed } from '@angular/core/testing';

import { TranscribeSpeechService } from './transcribe-speech.service';

describe('TranscribeSpeechService', () => {
  let service: TranscribeSpeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscribeSpeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
