import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    // Guard for environments without IntersectionObserver
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.renderer.addClass(this.el.nativeElement, 'is-visible');
              // Once visible, we no longer need to observe
              this.observer?.unobserve(this.el.nativeElement);
            }
          }
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.15,
        }
      );
      this.observer.observe(this.el.nativeElement);
    } else {
      // Fallback: show immediately
      this.renderer.addClass(this.el.nativeElement, 'is-visible');
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

