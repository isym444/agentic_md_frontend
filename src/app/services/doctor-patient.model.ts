// models/doctor-patient.model.ts

// =====================
// Top-level response
// =====================
export interface GetPatientsFromDoctorIdResponse {
  patient: Patient;
  doctor: Doctor;
  consultations: ConsultationBundle[];
}

// =====================
// Core entities
// =====================
export interface Patient {
  patient_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string; // "YYYY-MM-DD"
  hpc: string; // Note: your example patient includes "hpc" (string). Keep it.
}

export interface Doctor {
  doctor_id: number;
  first_name: string;
  last_name: string;
  specialty: string;
}

// Each item in the "consultations" array
export interface ConsultationBundle {
  consultation: Consultation;
  consult_summary: ConsultSummary;
  observations: Observation[];
  medical_orders: MedicalOrder[];
  ddx: Ddx[];
  treatment_plans: TreatmentPlan[];

  // present in your example as empty arrays, keep them optional-safe
  prescriptions: Prescription[];
  referrals: Referral[];
}

export interface Consultation {
  consultation_id: number;
  patient_id: number;
  doctor_id: number;
  consultation_date: string; // ISO timestamp
  status: string; // e.g. "in_progress"
}

// =====================
// Consult summary block
// =====================
export interface ConsultSummary {
  summary: Summary;
  hpc: HpcItem[];
  pmh: PmhItem[];
  family_history: FamilyHistoryItem[];
  social_history: SocialHistoryItem[];
  examination_findings: ExaminationFindingItem[];
  drug_history: DrugHistoryItem[];
}

export interface Summary {
  summary_id: number;
  consultation_id: number;
  created_at: string; // ISO timestamp
}

export interface HpcItem {
  hpc_id: number;
  summary_id: number;
  complaint_details: string;
  duration: string;
  created_at: string;
}

export interface PmhItem {
  pmh_id: number;
  summary_id: number;
  condition_name: string;
  diagnosis_date: string; // "YYYY-MM-DD"
  status: string;
  created_at: string;
}

export interface FamilyHistoryItem {
  family_history_id: number;
  summary_id: number;
  family_member_relation: string;
  condition_name: string;
  created_at: string;
}

export interface SocialHistoryItem {
  social_history_id: number;
  summary_id: number;
  smoking_status: string;
  alcohol_consumption: string;
  living_conditions: string;
  created_at: string;
}

export interface ExaminationFindingItem {
  examination_id: number;
  summary_id: number;
  body_system: string;
  clinical_findings: string;
  created_at: string;
}

// Your example shows drug_history: [] (empty).
// If later you return items, define them here.
export interface DrugHistoryItem {
  // Unknown from your sample; keep flexible:
  [key: string]: any;
}

// =====================
// Observations
// =====================
export interface Observation {
  observation_id: number;
  consultation_id: number;
  heart_rate: number;
  blood_pressure_systolic: number;
  blood_pressure_diastolic: number;
  temperature: number;
  respiratory_rate: number;
  oxygen_saturation: number;
  taken_at: string; // ISO timestamp
}

// =====================
// Medical orders + results
// =====================
export interface MedicalOrder {
  order_id: number;
  consultation_id: number;
  order_type: string;
  specific_test: string;
  ai_justification: string;
  status: string;
  created_at: string;

  radiology: RadiologyFinding[];
  blood_results: BloodResult[];
}

export interface RadiologyFinding {
  finding_id: number;
  order_id: number;
  report_text: string;
  reported_by: string;
  received_at: string; // ISO timestamp
}

export interface BloodResult {
  result_id: number;
  order_id: number;
  biomarker: string;
  value: number;
  unit: string;
  reference_range: string;
  received_at: string; // ISO timestamp
}

// =====================
// DDX
// =====================
export interface Ddx {
  ddx_id: number;
  consultation_id: number;
  condition_name: string;
  probability: string; // "High" | "Low" etc (string in sample)
  reasoning: string;
  created_at: string;
}

// =====================
// Treatment plans + nested prescriptions/referrals
// =====================
export interface TreatmentPlan {
  plan_id: number;
  ddx_id: number;
  consultation_id: number;
  action_items: string;
  status: string; // "approved" | "rejected" etc
  created_at: string;

  prescriptions: Prescription[];
  referrals: Referral[];
}

export interface Prescription {
  prescription_id: number;
  plan_id: number;
  medication_name: string;
  dosage: string;
  start_date: string; // "YYYY-MM-DD"
  end_date: string; // "YYYY-MM-DD"
  times_per_day: number;
  created_at: string;
}

export interface Referral {
  referral_id: number;
  plan_id: number;
  referred_specialty: string;
  referred_justification: string;
  created_at: string;
}
