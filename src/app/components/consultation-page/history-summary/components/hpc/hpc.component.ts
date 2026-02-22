import { Component } from '@angular/core';
import { HpcPayload } from '../../../../../models/payloadModels';

@Component({
  selector: 'app-hpc',
  imports: [],
  templateUrl: './hpc.component.html',
  styleUrl: './hpc.component.css',
})
export class HpcComponent {
  hpcText: HpcPayload = {
    complaintDetails:
      'Mr A.B. presents with a 4-day history of worsening shortness of breath, productive cough, and pleuritic right-sided chest pain. He reports yellow-green sputum and feeling feverish with rigors overnight. Breathlessness now limits him to walking across a room (baseline: 1–2 km). Associated symptoms include fever, chills, reduced oral intake, and fatigue. He denies haemoptysis, calf pain or swelling, and recent long-haul travel. Red flags include new confusion reported by his partner this morning, one episode of near-syncope on standing, and reduced urine output today. Timeline: Days 1–2 cough and malaise managed at home; Day 3 fever and pleuritic pain with increasing sputum; Day 4 marked dyspnoea at rest prompting ED attendance. Relevant negatives: no known aspiration, no recent sick contacts, no preceding weight loss or night sweats. Past medical history includes COPD (GOLD 2, last exacerbation 8 months ago), hypertension, type 2 diabetes mellitus (diet + metformin), ischaemic heart disease (PCI 2019), and CKD stage 3a (baseline eGFR ~55). Family history: father had a myocardial infarction at 58; mother has type 2 diabetes; no known family history of chronic lung disease or malignancy.',
  };
}
