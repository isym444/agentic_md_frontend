export interface HpcPayload {
  hpcId?: number;
  summaryId?: number;
  complaintDetails: string;
  duration?: string;
  createdAt?: string;
}
export interface DrugHistory {
  dhId: number; // int8
  summaryId: number; // int8
  drugName: string; // text
  createdAt: string; // timestamptz (ISO string)
}
export interface Drug {
  drugId: number; // int8
  dhId: number; // int8 (FK → dh)
  drugName: string; // text
  timesPerDay: number;
}
export interface ExaminationFindingsPayload {
  examinationId?: number;
  summaryId?: number;
  bodySystem?: string;
  clinicalFindings: string;
  createdAt?: string;
}

export interface DifferentialDiagnosis {
  ddxId: number;
  consultationId: number;
  aiGeneratedDdx: string;
  iterationNumber: number;
  createdAt: string;
}

export interface TreatmentPlan {
  planId: number;
  ddxId: number;
  consultationId: number;
  actionItems: string;
  status: string;
  createdAt: string;
}

export interface Patient {
  patient_id?: number;
  first_name: string | null;
  last_name: string | null;
  date_of_birth: string | null;
  hpc: string | null;
}

export interface Doctor {
  doctorId: number;
  first_name: string;
  last_name: string;
  specialty: string;
}

export interface MedicalOrder {
  orderId: number; // int8
  consultationId: number; // int8
  orderType: string; // text (e.g. "Blood", "Radiology")
  specificTest: string; // text (e.g. "CRP", "CXR")
  aiJustification: string; // text
  status: string; // text (e.g. "pending", "completed")
  createdAt: string; // timestamptz (ISO string)
}

export interface BloodResult {
  resultId: number; // int8
  orderId: number; // int8 (FK → medical_orders)
  biomarker: string; // text (e.g. "CRP")
  value?: number; // numeric
  unit: string; // text (e.g. "mg/L")
  referenceRange: string; // text
  receivedAt?: string; // timestamptz (ISO string)
}

export interface RadiologicalFinding {
  findingId: number; // int8
  orderId: number; // int8 (FK → medical_orders)
  reportText?: string; // text
  reportedBy?: string; // text
  receivedAt?: string; // timestamptz (ISO string)
}

export interface MedicalOrderWithResults extends MedicalOrder {
  bloodResults?: BloodResult[];
  radiologyFindings?: RadiologicalFinding[];
}
