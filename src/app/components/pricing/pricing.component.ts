import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {
  isAnnual = signal(false);

  plans = [
    {
      name: 'starter plan',
      monthlyPrice: 499,
      annualPrice: 5390,
      description: 'Our basic pricing plan is designed to offer extraordinary value and features.',
      features: [
        { text: 'all talentos selected', included: true },
        { text: 'unlimited requests', included: true },
        { text: 'unlimited revisions', included: true },
        { text: 'project management', included: true },
        { text: 'priority for services', included: false },
        { text: 'peace or cancel anytime', included: false },
        { text: 'email support', included: false }
      ]
    },
    {
      name: 'growth plan',
      monthlyPrice: 799,
      annualPrice: 8630,
      badge: 'PRO',
      description: 'Our pro pricing plan is designed for a businesses with advanced features.',
      features: [
        { text: 'all talentos selected', included: true },
        { text: 'unlimited requests', included: true },
        { text: 'unlimited revisions', included: true },
        { text: 'project management', included: true },
        { text: 'priority for services', included: true },
        { text: 'peace or cancel anytime', included: true },
        { text: 'email support', included: false }
      ]
    },
    {
      name: 'premium plan',
      monthlyPrice: 1299,
      annualPrice: 14030,
      description: 'Our plus pricing plan is designed for a corporate with premium support.',
      features: [
        { text: 'all talentos selected', included: true },
        { text: 'unlimited requests', included: true },
        { text: 'unlimited revisions', included: true },
        { text: 'project management', included: true },
        { text: 'priority for services', included: true },
        { text: 'peace or cancel anytime', included: true },
        { text: 'email support', included: true }
      ]
    }
  ];

  togglePricing(): void {
    this.isAnnual.update(value => !value);
  }
}
