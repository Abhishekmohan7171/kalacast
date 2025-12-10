import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'instagram', url: 'https://instagram.com/kalacast.app' },
    { name: 'x', url: 'https://x.com/yberhood' }
  ];

  openApp() {
    try {
      window.open('https://yberhood-castrole.web.app/', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(error);
    }
  }
}
