import { Component, input, computed } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

/**
 * LegalConsentRow — toggle + label row for terms/privacy consent items.
 *
 * @status design-spec
 *
 * @input checked — boolean, default `false`. Visual toggle state.
 * @input align — `'left' | 'right'`, default `'left'`. Controls switch position.
 *
 * ## Tokens
 * `bg-success` (checked toggle), `text-foreground`, `text-muted-foreground`
 *
 * ## Engineering Handoff
 * - Wire two-way binding via `BrnSwitch` changed output for real toggle state.
 * - Block form submission (e.g. "Accept & Continue") until all required consents are checked.
 * - Label content is projected via `<ng-content>` — supports inline links.
 */
@Component({
  selector: 'app-legal-consent-row',
  standalone: true,
  imports: [HlmSwitch],
  host: {
    '[class]': 'hostClass()',
  },
  template: `
    <hlm-switch
      [class]="switchClass()"
      [checked]="checked()"
    />
    <span [class]="labelClass()">
      <ng-content />
    </span>
  `,
})
export class LegalConsentRow {
  readonly checked = input(false);
  readonly align = input<'left' | 'right'>('left');

  readonly hostClass = computed(() =>
    this.align() === 'right'
      ? 'flex items-center justify-between gap-3 py-2'
      : 'flex items-start gap-3 py-2'
  );

  readonly switchClass = computed(() =>
    this.align() === 'right'
      ? 'order-2 shrink-0 data-[state=checked]:bg-success'
      : 'order-1 mt-0.5 shrink-0 data-[state=checked]:bg-success'
  );

  readonly labelClass = computed(() =>
    this.align() === 'right'
      ? 'order-1 text-sm font-medium text-foreground'
      : 'order-2 text-sm text-foreground'
  );
}
