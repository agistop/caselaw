import { Component, input } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmBadge } from '@spartan-ng/helm/badge';

/**
 * PlanCard — pricing plan card for the plan selection screen.
 *
 * @status design-spec
 *
 * @input name — string. Plan display name (e.g. "Professional").
 * @input description — string. One-line plan summary.
 * @input quota — string. Usage limit text (e.g. "Up to 50 users").
 * @input price — string. Price display (e.g. "$29" or "Custom").
 * @input priceSuffix — string. Period label (e.g. "/month").
 * @input cta — string, default `'Get Started'`. Button label.
 * @input ctaVariant — `'default' | 'outline'`, default `'outline'`. Button style.
 * @input popular — boolean, default `false`. Shows "Most Popular" badge.
 * @input features — `string[]`, default `[]`. Checklist of plan features.
 *
 * ## Tokens
 * `bg-card`, `border-border`, `text-foreground`, `text-muted-foreground`,
 * `bg-success/10`, `text-success` (popular badge), `border-success/20`
 *
 * ## Engineering Handoff
 * - Wire CTA button to Stripe checkout or contact sales flow.
 * - Prices and quotas are placeholder values — replace with real pricing from API.
 * - Consider adding a `recommended` input to auto-select the popular plan.
 */
@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [HlmButton, HlmBadge],
  template: `
    <div class="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <!-- Header -->
      <div class="flex items-center gap-2">
        <h3 class="text-lg font-semibold text-foreground">{{ name() }}</h3>
        @if (popular()) {
          <span hlmBadge class="border-success/20 bg-success/10 text-success">Most Popular</span>
        }
      </div>

      <p class="text-sm text-muted-foreground">{{ description() }}</p>

      <!-- Quota -->
      <div class="flex items-center gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        {{ quota() }}
      </div>

      <!-- Price -->
      <div>
        <span class="text-3xl font-bold text-foreground">{{ price() }}</span>
        @if (priceSuffix()) {
          <span class="ml-1 text-sm text-muted-foreground">{{ priceSuffix() }}</span>
        }
      </div>

      <!-- CTA -->
      <button hlmBtn [variant]="ctaVariant()" class="w-full">{{ cta() }}</button>

      <!-- Features -->
      <ul class="flex flex-col gap-3 pt-2">
        @for (feature of features(); track feature) {
          <li class="flex items-center gap-2 text-sm text-muted-foreground">
            <svg class="h-4 w-4 shrink-0 text-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ feature }}
          </li>
        }
      </ul>
    </div>
  `,
})
export class PlanCard {
  readonly name = input('');
  readonly description = input('A brief description of this plan');
  readonly quota = input('');
  readonly price = input('');
  readonly priceSuffix = input('');
  readonly cta = input('Get Started');
  readonly ctaVariant = input<'default' | 'outline'>('outline');
  readonly popular = input(false);
  readonly features = input<string[]>([]);
}
