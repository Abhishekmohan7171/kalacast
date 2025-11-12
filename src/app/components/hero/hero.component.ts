import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  currentTime = signal<string>('');
  private intervalId?: number;

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = window.setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateTime(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.currentTime.set(`${hours}:${minutes}:${seconds}`);
  }

  openApp(): void {
    console.log('open app');
    window.open('https://yberhood-castrole.web.app/', '_blank', 'noopener , noreferrer');
  }
}
