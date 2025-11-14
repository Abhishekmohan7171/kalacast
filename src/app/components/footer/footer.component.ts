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
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'dribbble', url: 'https://dribbble.com' },
    { name: 'twitter', url: 'https://twitter.com' }
  ];

  openApp() {
    try {
      window.open('https://yberhood-castrole.web.app/', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(error);
    }
  }
}
