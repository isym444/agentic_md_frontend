import { Component } from '@angular/core';
import { ExaminationFindingsPayload } from '../../../../../models/payloadModels';

@Component({
  selector: 'app-examination-findings',
  imports: [],
  templateUrl: './examination-findings.component.html',
  styleUrl: './examination-findings.component.css',
})
export class ExaminationFindingsComponent {
  examinationFindings: ExaminationFindingsPayload = {
    clinicalFindings:
      'General: Ill-looking and mildly confused (GCS 14, V4), speaking in short sentences. Peripheral perfusion reduced with capillary refill approximately 3–4 seconds. Respiratory: respiratory rate 28/min with use of accessory muscles, reduced expansion at the right base, crackles in the right lower zone with bronchial breathing, and bilateral wheeze in keeping with background COPD. Cardiovascular: tachycardic with regular rhythm, no murmurs, JVP not elevated, no peripheral oedema. Abdomen soft and non-tender with no organomegaly. Neurology: oriented to person and place but not time, no focal neurological deficit. ',
  };
}
