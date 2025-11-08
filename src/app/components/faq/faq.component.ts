import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  openIndex = signal<number | null>(null);

  faqs = [
    {
      id: '01',
      question: 'what do i need to get started?',
      answer: 'Getting started is easy! Simply sign up, create your profile, and start exploring opportunities or posting your projects.'
    },
    {
      id: '02',
      question: 'what kind of customization is available?',
      answer: 'You can customize your profile with photos, videos, reels, voice recordings, and detailed information about your skills and experience.'
    },
    {
      id: '03',
      question: 'how easy is it to edit for beginners?',
      answer: 'Our platform is designed to be intuitive and user-friendly. No technical knowledge required - just upload your content and let us handle the rest.'
    },
    {
      id: '04',
      question: 'let me know more about moneyback guarantee?',
      answer: 'We offer a satisfaction guarantee. If you\'re not happy with our service within the first 30 days, contact us for a full refund.'
    },
    {
      id: '05',
      question: 'do i need to know how to code?',
      answer: 'No coding knowledge is required! Our platform is completely no-code and designed for creators, not developers.'
    },
    {
      id: '06',
      question: 'what will i get after purchasing the template?',
      answer: 'You\'ll get full access to all platform features, unlimited uploads, professional profile tools, and dedicated support.'
    }
  ];

  toggleFaq(index: number): void {
    this.openIndex.update(current => current === index ? null : index);
  }
}
