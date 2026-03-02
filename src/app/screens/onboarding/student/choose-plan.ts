import { Component } from '@angular/core';
import { ProgressSteps } from '../../../components/custom/progress-steps/progress-steps';
import { PlanCard } from '../../../components/custom/plan-card/plan-card';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
  selector: 'app-st-choose-plan',
  standalone: true,
  imports: [ProgressSteps, PlanCard, HlmButton, HlmSwitch],
  template: `
    <div class="min-h-screen bg-background px-8 py-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-2xl font-semibold text-foreground">Choose your plan</h1>
        <p class="mt-1 text-sm text-muted-foreground">Select a plan and get started.</p>

        <div class="mt-6 flex items-center justify-between">
          <app-progress-steps [totalSteps]="4" [currentStep]="4" />

          <div class="flex h-8 items-center gap-1.5 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs">
            <span>🇺🇸</span>
            <span>USD</span>
            <svg class="h-3.5 w-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>

          <div class="flex items-center gap-2 text-sm">
            <span class="text-muted-foreground">Billed yearly</span>
            <hlm-switch [checked]="true" class="data-[state=checked]:bg-success" />
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <app-plan-card
            name="Personal"
            quota="100 Searches"
            price="Free Trial"
            priceSuffix="One month"
            cta="Get Started"
            [features]="placeholderFeatures"
          />
          <app-plan-card
            name="Standard"
            quota="1,000 Searches"
            price="$5,000"
            priceSuffix="per month"
            cta="Get Started"
            [features]="placeholderFeatures"
          />
          <app-plan-card
            name="Business Pro"
            quota="10,000 Searches"
            price="$20,000"
            priceSuffix="per month"
            cta="Get Started"
            [popular]="true"
            [features]="placeholderFeatures"
          />
          <app-plan-card
            name="Enterprise"
            quota="X Searches"
            price="Speak to our team"
            cta="Book or Jump on Instant Call"
            ctaVariant="default"
            [features]="placeholderFeatures"
          />
        </div>

        <div class="mt-8 flex items-center justify-between">
          <button hlmBtn variant="ghost" class="text-sm text-muted-foreground">Go back</button>
          <button hlmBtn>Finish</button>
        </div>
      </div>
    </div>
  `,
})
export class StChoosePlan {
  readonly placeholderFeatures = [
    'A brief description of this plan',
    'A brief description of this plan',
    'A brief description of this plan',
    'A brief description of this plan',
  ];
}
