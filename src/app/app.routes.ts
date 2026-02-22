import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsultationPageComponent } from './components/consultation-page/consultation-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'consultation/:id',
    component: ConsultationPageComponent,
  },
];
