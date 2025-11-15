import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [DecimalPipe],
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
        { text: 'upload up to 10 audition reels', included: true },
        { text: 'ad-free experience', included: true },
        { text: 'full analytics access', included: true }
      ]
    },
    {
      name: 'yearly plan',
      price: 2222,
      period: 'year',
      description: 'get all premium features with yearly savings.',
      saveText: 'save ₹442 vs monthly',
      features: [
        { text: 'high visibility in searches', included: true },
        { text: 'upload up to 10 audition reels', included: true },
        { text: 'ad-free experience', included: true },
        { text: 'full analytics access', included: true }
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
        { text: 'ad-free casting experience', included: true },
        { text: 'full actor database access', included: true },
        { text: 'unlimited usage', included: true },
        { text: 'priority support', included: true }
      ]
    },
    {
      name: 'yearly plan',
      price: 22222,
      period: 'year',
      description: 'get the same features with yearly savings.',
      saveText: 'save ₹4,442 vs monthly',
      features: [
        { text: 'ad-free casting experience', included: true },
        { text: 'full actor database access', included: true },
        { text: 'unlimited usage', included: true },
        { text: 'priority support', included: true }
      ]
    }
  ];

  currentPlans = computed(() => this.isProducer() ? this.producerPlans : this.actorPlans);

  toggleUserType(): void {
    this.isProducer.update(value => !value);
  }
}
