import { Component, input } from '@angular/core';

@Component({
  selector: 'app-type-selection-card',
  standalone: true,
  template: `
    <div
      class="flex cursor-pointer flex-col items-center gap-3 rounded-xl border bg-card p-8 transition-all"
      [class]="selected() ? 'ring-2 ring-ring border-transparent' : 'border-border hover:border-foreground/20'"
    >
      <!-- Placeholder illustration -->
      <div class="flex h-24 w-24 items-center justify-center">
        @if (type() === 'individual') {
          <svg class="h-20 w-20 text-muted-foreground/30" viewBox="0 0 80 80" fill="currentColor">
            <circle cx="40" cy="28" r="14" />
            <ellipse cx="40" cy="68" rx="22" ry="16" />
          </svg>
        } @else {
          <svg class="h-20 w-20 text-muted-foreground/30" viewBox="0 0 100 80" fill="currentColor">
            <circle cx="50" cy="24" r="12" />
            <ellipse cx="50" cy="60" rx="18" ry="14" />
            <circle cx="24" cy="30" r="10" opacity="0.6" />
            <ellipse cx="24" cy="62" rx="14" ry="12" opacity="0.6" />
            <circle cx="76" cy="30" r="10" opacity="0.6" />
            <ellipse cx="76" cy="62" rx="14" ry="12" opacity="0.6" />
          </svg>
        }
      </div>

      <span class="text-base font-semibold text-foreground">{{ title() }}</span>
      <span class="text-sm text-muted-foreground">{{ subtitle() }}</span>
    </div>
  `,
})
export class TypeSelectionCard {
  readonly type = input<'individual' | 'group'>('individual');
  readonly title = input('');
  readonly subtitle = input('');
  readonly selected = input(false);
}
