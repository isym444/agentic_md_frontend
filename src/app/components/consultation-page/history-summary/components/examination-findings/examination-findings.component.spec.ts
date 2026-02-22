import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationFindingsComponent } from './examination-findings.component';

describe('ExaminationFindingsComponent', () => {
  let component: ExaminationFindingsComponent;
  let fixture: ComponentFixture<ExaminationFindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminationFindingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminationFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
