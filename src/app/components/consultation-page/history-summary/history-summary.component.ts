import { Component } from '@angular/core';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { HpcComponent } from './components/hpc/hpc.component';
import { DhComponent } from './components/dh/dh.component';
import { ExaminationFindingsComponent } from './components/examination-findings/examination-findings.component';
import { DdxComponent } from './components/ddx/ddx.component';
import { PlanComponent } from './components/plan/plan.component';

@Component({
  selector: 'app-history-summary',
  imports: [
    PatientDetailsComponent,
    HpcComponent,
    DhComponent,
    ExaminationFindingsComponent,
    DdxComponent,
    PlanComponent
  ],
  templateUrl: './history-summary.component.html',
  styleUrl: './history-summary.component.css',
})
export class HistorySummaryComponent {}
