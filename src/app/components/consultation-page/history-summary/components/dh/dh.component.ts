import { Component } from '@angular/core';
import { Drug } from '../../../../../models/payloadModels';
@Component({
  selector: 'app-dh',
  imports: [],
  templateUrl: './dh.component.html',
  styleUrl: './dh.component.css',
})
export class DhComponent {
  drugHistory: Drug[] = [
    {
      drugId: 1,
      dhId: 101,
      drugName: 'Tiotropium inhaler',
      timesPerDay: 1,
    },
    {
      drugId: 2,
      dhId: 101,
      drugName: 'Salbutamol inhaler',
      timesPerDay: 4, // PRN but averaging
    },
    {
      drugId: 3,
      dhId: 101,
      drugName: 'Amlodipine 5 mg',
      timesPerDay: 1,
    },
    {
      drugId: 4,
      dhId: 101,
      drugName: 'Atorvastatin 40 mg',
      timesPerDay: 1,
    },
    {
      drugId: 5,
      dhId: 101,
      drugName: 'Aspirin 75 mg',
      timesPerDay: 1,
    },
    {
      drugId: 6,
      dhId: 101,
      drugName: 'Metformin 500 mg',
      timesPerDay: 2,
    },
  ];
}
