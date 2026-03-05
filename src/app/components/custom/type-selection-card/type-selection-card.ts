import { Component, input } from '@angular/core';

/**
 * TypeSelectionCard — account type picker card (individual vs group).
 *
 * @status design-spec
 *
 * @input type — `'individual' | 'group'`, default `'individual'`. Controls placeholder illustration.
 * @input title — string, display name (e.g. "Law Firm").
 * @input subtitle — string, supporting text (e.g. "For teams and organizations").
 * @input selected — boolean, default `false`. Toggles `ring-2 ring-ring` selected state.
 *
 * ## Tokens
 * `bg-card`, `border-border`, `ring-ring`, `text-foreground`, `text-muted-foreground`
 *
 * ## Engineering Handoff
 * - Wire click handler to toggle selection (only one card active at a time).
 * - Replace placeholder SVG illustrations with final assets from design.
 * - Emit selected type to parent for routing to the correct persona screen.
 */
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
