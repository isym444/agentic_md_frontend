import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/payloadModels';
import { Observable } from 'rxjs';
import { GetPatientsFromDoctorIdResponse } from './doctor-patient.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private baseUrl = 'http://localhost:8000'; // adjust if deployed

  constructor(private http: HttpClient) {}

  getPatientsFromDoctorId(doctorId: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(
      `${this.baseUrl}/get_patients_from_doctor_id/${doctorId}`,
    );
  }

  createPatientFromDoctorId(
    doctorId: number,
    payload: Patient,
  ): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/create_patient_from_doctor_id/${doctorId}`,
      payload,
    );
  }

  getFullPatientDoctorRecord(
    patientId: number,
    doctorId: number,
  ): Observable<GetPatientsFromDoctorIdResponse> {
    return this.http.get<GetPatientsFromDoctorIdResponse>(
      `${this.baseUrl}/patient-doctor-full-record`,
      {
        params: {
          patient_id: patientId,
          doctor_id: doctorId,
        },
      },
    );
  }
}
