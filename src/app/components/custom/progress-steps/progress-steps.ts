import { Component, input, computed } from '@angular/core';

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
