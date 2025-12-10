import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mission-summary',
  imports: [],
  templateUrl: './mission-summary.component.html',
  styleUrl: './mission-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionSummaryComponent {

  openApp() {
    try {
      window.open('https://yberhood.web.app/home', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(error);
    }
  }

}
