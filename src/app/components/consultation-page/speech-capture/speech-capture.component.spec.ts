import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechCaptureComponent } from './speech-capture.component';

describe('SpeechCaptureComponent', () => {
  let component: SpeechCaptureComponent;
  let fixture: ComponentFixture<SpeechCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechCaptureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
