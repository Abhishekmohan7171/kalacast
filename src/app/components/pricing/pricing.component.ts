import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {
  isProducer = signal(false);

  actorPlans = [
    {
      name: 'monthly plan',
      price: 222,
      period: 'month',
      description: 'your starter plan to showcase your talent.',
      features: [
        { text: 'high visibility in searches', included: true },
        { text: 'upload up to 10 audition tapes', included: true },
        { text: 'get free masterclass', included: true },
        { text: 'full analytics access', included: true },
        { text: 'video support', included: true },
        { text: 'cancel anytime', included: true }
      ]
    },
    {
      name: 'yearly plan',
      price: 2222,
      period: 'year',
      description: 'Our plus pricing plan is designed for a corporate with premium support.',
      features: [
        { text: 'high visibility in searches', included: true },
        { text: 'upload up to 10 audition tapes', included: true },
        { text: 'get free poster shots', included: true },
        { text: 'full analytics access', included: true },
        { text: 'video support', included: true },
        { text: 'cancel anytime', included: true }
      ]
    }
  ];

  producerPlans = [
    {
      name: 'monthly plan',
      price: 2222,
      period: 'month',
      description: 'your complete access to cast without limits.',
      features: [
        { text: 'get free casting suggestions', included: true },
        { text: 'use short audition scripts', included: true },
        { text: 'shortlist casts', included: true },
        { text: 'priority support', included: true },
        { text: 'email support', included: true },
        { text: 'cancel anytime', included: true }
      ]
    },
    {
      name: 'yearly plan',
      price: 22222,
      period: 'year',
      description: 'Our plus pricing plan is designed for a corporate with premium support.',
      features: [
        { text: 'high visibility in searches', included: true },
        { text: 'upload up to 10 audition tapes', included: true },
        { text: 'get free poster shots', included: true },
        { text: 'full analytics access', included: true },
        { text: 'video support', included: true },
        { text: 'cancel anytime', included: true }
      ]
    }
  ];

  currentPlans = computed(() => this.isProducer() ? this.producerPlans : this.actorPlans);

  toggleUserType(): void {
    this.isProducer.update(value => !value);
  }
}
