import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { PatientDetailsComponent } from '../consultation-page/history-summary/components/patient-details/patient-details.component';
import { Patient } from '../../models/payloadModels';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiDataService } from '../../services/api-data.service';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [
    TableModule,
    PatientDetailsComponent,
    CommonModule,
    CardModule,
    InputTextModule,
    TextareaModule,
    DatePickerModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  newPatientForm!: any;
  constructor(
    private router: Router,
    private apiDataService: ApiDataService,
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {
    this.newPatientForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      date_of_birth: [null as Date | null, [Validators.required]],
      hpc: [''],
    });
  }

  doctorId = 1;

  patientListForDoctor: Patient[] = [];
  selectedPatient?: Patient;

  today = new Date();
  isSubmitting = false;

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.apiDataService.getPatientsFromDoctorId(this.doctorId).subscribe({
      next: (data) => {
        this.patientListForDoctor = data ?? [];
      },
      error: (err) => {
        console.error('Error loading patients', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Failed to load patients',
          detail: err?.error?.detail ?? 'Please try again.',
        });
      },
    });
  }

  onRowSelect(event: any) {
    const patient = event.data;
    this.router.navigate(['/consultation', patient.patient_id]);
  }

  private toYYYYMMDD(date: Date): string {
    // FastAPI date expects YYYY-MM-DD
    return date.toISOString().slice(0, 10);
  }

  clearNewPatientForm() {
    this.newPatientForm.reset();
  }

  submitNewPatient() {
    if (this.newPatientForm.invalid) {
      this.newPatientForm.markAllAsTouched();
      return;
    }

    const v = this.newPatientForm.value;
    const dob = v.date_of_birth as Date;

    const payload = {
      first_name: (v.first_name ?? '').trim(),
      last_name: (v.last_name ?? '').trim(),
      date_of_birth: this.toYYYYMMDD(dob),
      hpc: (v.hpc ?? '').trim() || null,
    };

    this.isSubmitting = true;

    this.apiDataService
      .createPatientFromDoctorId(this.doctorId, payload)
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Patient created',
            detail: `${payload.first_name} ${payload.last_name}`,
          });

          // refresh table + reset form
          this.loadPatients();
          this.clearNewPatientForm();
          this.isSubmitting = false;

          // optional: navigate to newly created patient's consultation page
          const newPatientId = res?.patient?.patient_id;
          if (newPatientId) {
            this.router.navigate(['/consultation', newPatientId]);
          }
        },
        error: (err) => {
          console.error('Error creating patient', err);
          this.isSubmitting = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Failed to create patient',
            detail: err?.error?.detail ?? 'Please try again.',
          });
        },
      });
  }
}
