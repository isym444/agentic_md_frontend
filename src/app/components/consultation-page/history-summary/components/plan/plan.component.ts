import { Component } from '@angular/core';
import { TreatmentPlan } from '../../../../../models/payloadModels';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent {
  treatmentPlans: TreatmentPlan[] = [
    {
      planId: 1,
      ddxId: 1, // link to relevant differential
      consultationId: 123,
      actionItems: `Escalate to senior review; consider sepsis pathway.
Oxygen titrated to appropriate target saturations.
IV access x2, blood cultures prior to antibiotics where possible.
IV fluids cautiously (consider cardiac history), reassess perfusion and urine output.`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      planId: 2,
      ddxId: 1,
      consultationId: 123,
      actionItems: `Repeat VBG/ABG if worsening or concern for hypercapnia.
ECG + troponin if chest pain or ischaemia concern.
Sputum culture, viral PCR as per local policy.
Consider CTPA if PE remains a concern after initial treatment/assessment.`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      planId: 3,
      ddxId: 1,
      consultationId: 123,
      actionItems: `Empiric antibiotics for CAP per local guidelines (penicillin allergy noted).
Bronchodilators: nebulised salbutamol/ipratropium if needed.
Consider short course oral steroids if COPD exacerbation component.
VTE prophylaxis if not contraindicated.
Diabetes: capillary glucose monitoring and treat per protocol.`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      planId: 4,
      ddxId: 1,
      consultationId: 123,
      actionItems: `Strict fluid balance; consider urinary catheter if needed for accurate output.
Repeat U&E/creatinine within 12–24h (earlier if unstable).
NEWS2 monitoring; consider HDU/ICU referral if persistent hypotension, rising lactate, or respiratory failure.`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      planId: 5,
      ddxId: 1,
      consultationId: 123,
      actionItems: `Discuss diagnosis and plan with patient and partner (as appropriate).
Document ceiling of care / escalation plan after senior review.
Smoking cessation reinforcement and vaccination review at discharge planning.`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
  ];
}
