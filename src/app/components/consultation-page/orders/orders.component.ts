import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MedicalOrder, MedicalOrderWithResults } from '../../../models/payloadModels';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders: MedicalOrderWithResults[] = [
    {
      orderId: 503,
      consultationId: 123,
      orderType: 'Blood',
      specificTest: 'Urea & Electrolytes',
      aiJustification:
        'Evaluate renal function and dehydration in context of sepsis.',
      status: 'completed',
      createdAt: '2026-02-21T13:17:00Z',
      bloodResults: [
        {
          resultId: 9001,
          orderId: 503,
          biomarker: 'Urea',
          value: 11.0,
          unit: 'mmol/L',
          referenceRange: '2.5–7.8',
          receivedAt: '2026-02-21T13:55:00Z',
        },
        {
          resultId: 9002,
          orderId: 503,
          biomarker: 'Creatinine',
          value: 145,
          unit: 'µmol/L',
          referenceRange: '60–110',
          receivedAt: '2026-02-21T13:55:00Z',
        },
        {
          resultId: 9003,
          orderId: 503,
          biomarker: 'Sodium',
          value: 132,
          unit: 'mmol/L',
          referenceRange: '135–145',
          receivedAt: '2026-02-21T13:55:00Z',
        },
        {
          resultId: 9004,
          orderId: 503,
          biomarker: 'Potassium',
          value: 4.6,
          unit: 'mmol/L',
          referenceRange: '3.5–5.1',
          receivedAt: '2026-02-21T13:55:00Z',
        },
      ],
    },
    {
      orderId: 504,
      consultationId: 123,
      orderType: 'Radiology',
      specificTest: 'Chest X-ray',
      aiJustification: 'Investigate suspected community-acquired pneumonia.',
      status: 'completed',
      createdAt: '2026-02-21T13:20:00Z',
      radiologyFindings: [
        {
          findingId: 7001,
          orderId: 504,
          reportText:
            'Right lower lobe consolidation. No pleural effusion. No pneumothorax.',
          reportedBy: 'Radiology Registrar',
          receivedAt: '2026-02-21T14:10:00Z',
        },
      ],
    },
  ];

  ordersForConfirmation: MedicalOrder[] = [
    {
      orderId: 601,
      consultationId: 124,
      orderType: 'Blood',
      specificTest: 'CRP',
      aiJustification:
        'Assess inflammatory response in suspected bacterial infection.',
      status: 'pending_confirmation',
      createdAt: '2026-02-21T14:25:00Z',
    },
    {
      orderId: 602,
      consultationId: 124,
      orderType: 'Blood',
      specificTest: 'Lactate',
      aiJustification: 'Evaluate tissue hypoperfusion in possible sepsis.',
      status: 'pending_confirmation',
      createdAt: '2026-02-21T14:26:00Z',
    },
    {
      orderId: 603,
      consultationId: 124,
      orderType: 'Radiology',
      specificTest: 'CT Abdomen & Pelvis',
      aiJustification: 'Rule out intra-abdominal source of infection.',
      status: 'pending_confirmation',
      createdAt: '2026-02-21T14:28:00Z',
    },
  ];

  acceptOrder(orderId: number) {}

  rejectOrder(orderId: number) {}
}
