import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pitch',
  imports: [],
  templateUrl: './pitch.component.html',
  styleUrl: './pitch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchComponent {
  cards = [
    {
      number: '01',
      title: 'SHOWCASE YOUR SKILLS WITH VIDEO REELS, PHOTOS, AND VOICE INTROS.',
      description: 'No casting couch. No back doors.',
      icons: [
        'assets/images/IMG_20251115_162709.png',
        'assets/images/IMG_20251115_162741.png',
        'assets/images/IMG_20251115_162825.png'
      ]
    },
    {
      number: '02',
      title: 'BUILD A PROFESSIONAL PROFILE PRODUCERS CAN TRUST.',
      description: 'Build your profile, showcase your craft, and let producers discover the real you.',
      icons: [
        'assets/images/IMG_20251115_162855.png',
        'assets/images/IMG_20251115_162915.png',
        'assets/images/IMG_20251115_162954.png'
      ]
    },
    {
      number: '03',
      title: 'BE DISCOVERED FOR THE ROLES THAT TRULY FIT YOU.',
      description: 'Because art deserves transparency.',
      icons: [
        'assets/images/IMG_20251115_163027.png',
        'assets/images/IMG_20251115_163053.png',
        'assets/images/IMG_20251115_163117.png'
      ]
    }
  ];
}
