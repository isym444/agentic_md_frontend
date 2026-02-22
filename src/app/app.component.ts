import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistorySummaryComponent } from './components/consultation-page/history-summary/history-summary.component';
import { OrdersComponent } from './components/consultation-page/orders/orders.component';
import { SpeechCaptureComponent } from './components/consultation-page/speech-capture/speech-capture.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HistorySummaryComponent,
    SpeechCaptureComponent,
    DashboardComponent,
    OrdersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'agentmd';
}
