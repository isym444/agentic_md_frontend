import { Component } from '@angular/core';
import { DifferentialDiagnosis } from '../../../../../models/payloadModels';

@Component({
  selector: 'app-ddx',
  imports: [],
  templateUrl: './ddx.component.html',
  styleUrl: './ddx.component.css',
})
export class DdxComponent {
  ddxs: DifferentialDiagnosis[] = [
    {
      ddxId: 1,
      consultationId: 123, // replace with real consultation ID
      aiGeneratedDdx:
        'Community-acquired pneumonia with sepsis (most likely given consolidation + inflammatory markers)',
      iterationNumber: 1,
      createdAt: new Date().toISOString(),
    },
    {
      ddxId: 2,
      consultationId: 123,
      aiGeneratedDdx: 'Infective COPD exacerbation (may be concurrent)',
      iterationNumber: 1,
      createdAt: new Date().toISOString(),
    },
    {
      ddxId: 3,
      consultationId: 123,
      aiGeneratedDdx:
        'Pulmonary embolism (pleuritic pain + tachycardia, but consolidation and sputum make less likely)',
      iterationNumber: 1,
      createdAt: new Date().toISOString(),
    },
    {
      ddxId: 4,
      consultationId: 123,
      aiGeneratedDdx:
        'Acute heart failure (less likely: no oedema/JVP elevation; focal signs on chest exam)',
      iterationNumber: 1,
      createdAt: new Date().toISOString(),
    },
    {
      ddxId: 5,
      consultationId: 123,
      aiGeneratedDdx:
        'Aspiration pneumonia (consider if history evolves; currently no clear aspiration event)',
      iterationNumber: 1,
      createdAt: new Date().toISOString(),
    },
  ];
}
