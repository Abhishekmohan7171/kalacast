import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { MissionBannerComponent } from './components/mission-banner/mission-banner.component';
import { PitchComponent } from './components/pitch/pitch.component';
import { ProducerToolsComponent } from './components/producer-tools/producer-tools.component';
import { AboutComponent } from './components/about/about.component';
import { MissionSummaryComponent } from './components/mission-summary/mission-summary.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    MissionBannerComponent,
    PitchComponent,
    ProducerToolsComponent,
    AboutComponent,
    MissionSummaryComponent,
    PricingComponent,
    FaqComponent,
    FooterComponent,
    RevealOnScrollDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'kalacast';
}
