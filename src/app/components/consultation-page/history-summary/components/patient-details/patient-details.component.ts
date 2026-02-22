import { Component } from '@angular/core';
import { Doctor, Patient } from '../../../../../models/payloadModels';

@Component({
  selector: 'app-patient-details',
  imports: [],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css',
})
export class PatientDetailsComponent {
  patient: Patient = {
    patient_id: 123456,
    first_name: 'A.',
    last_name: 'B.',
    date_of_birth: '1964-03-12', // makes him 62 in Feb 2026
    hpc: 'COPD (GOLD 2), Hypertension, Type 2 Diabetes, IHD (PCI 2019), CKD 3a',
  };

  doctor: Doctor = {
    doctorId: 42,
    first_name: 'John',
    last_name: 'Smith',
    specialty: 'Internal Medicine (IMT/FY2)',
  };

  calculateAge(dob: string | null): number {
    if (dob == null) {
      return 0;
    }
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
