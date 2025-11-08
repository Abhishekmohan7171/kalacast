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
      description: 'No casting couch. No back doors.'
    },
    {
      number: '02',
      title: 'BUILD A PROFESSIONAL PROFILE PRODUCERS CAN TRUST.',
      description: 'Build your profile, showcase your craft, and let producers discover the real you.'
    },
    {
      number: '03',
      title: 'BE DISCOVERED FOR THE ROLES THAT TRULY FIT YOU.',
      description: 'Because art deserves transparency.'
    }
  ];
}
