import { Component, OnInit, signal } from '@angular/core';
import { SpeechCaptureComponent } from './speech-capture/speech-capture.component';
import { HistorySummaryComponent } from './history-summary/history-summary.component';
import { OrdersComponent } from './orders/orders.component';
import { HpcComponent } from './history-summary/components/hpc/hpc.component';
import { ApiDataService } from '../../services/api-data.service';
import {
  ConsultSummary,
  GetPatientsFromDoctorIdResponse,
} from '../../services/doctor-patient.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultation-page',
  imports: [SpeechCaptureComponent, HistorySummaryComponent, OrdersComponent],
  templateUrl: './consultation-page.component.html',
  styleUrl: './consultation-page.component.css',
})
export class ConsultationPageComponent implements OnInit {
  // Using a Signal to track data
  public fullPatientDetails: GetPatientsFromDoctorIdResponse | null = null;
  public consultSummary!: ConsultSummary;
  patientId!: number;

  constructor(
    private apiDataService: ApiDataService,
    private route: ActivatedRoute,
  ) {}
  get hasConsultSummary(): boolean {
    return (
      this.consultSummary != null && Object.keys(this.consultSummary).length > 0
    );
  }
  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Consultation ID:', this.patientId);
    this.apiDataService
      .getFullPatientDoctorRecord(this.patientId, 1)
      .subscribe({
        next: (data) => {
          this.fullPatientDetails = data;
          console.log(data.patient);
          console.log(data.consultations);
          this.consultSummary =
            this.fullPatientDetails.consultations[0].consult_summary;
          // if (this.consultSummary == {}) {
          //   this.consultSummary = null;
          // }
          console.log('HERE!!: ', this.consultSummary);
        },
        error: (err) => console.error(err),
      });
  }
}
