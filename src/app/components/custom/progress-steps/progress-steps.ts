import { Component, input, computed } from '@angular/core';

/**
 * ProgressSteps — step indicator dots for modal onboarding flows.
 *
 * @status production-ready
 *
 * @input totalSteps — number, default `4`. Total number of steps.
 * @input currentStep — number, default `1`. Current active step (1-based).
 *
 * ## Tokens
 * `bg-foreground` (active step), `bg-border` (inactive step)
 *
 * ## Engineering Handoff
 * Production-ready — no wiring needed. Use as-is inside `<hlm-dialog-content>`.
 */
@Component({
  selector: 'app-progress-steps',
  standalone: true,
  template: `
    <div class="flex items-center gap-1.5">
      @for (step of steps(); track step) {
        <div
          class="h-2 rounded-full transition-colors"
          [class]="step <= currentStep()
            ? 'w-6 bg-foreground'
            : 'w-2 bg-border'"
        ></div>
      }
    </div>
  `,
})
export class ProgressSteps {
  readonly totalSteps = input(4);
  readonly currentStep = input(1);

  readonly steps = computed(() =>
    Array.from({ length: this.totalSteps() }, (_, i) => i + 1)
  );
}
