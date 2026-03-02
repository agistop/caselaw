import { Component } from '@angular/core';
import { OnboardingShell } from '../../../components/custom/onboarding-shell/onboarding-shell';
import { TypeSelectionCard } from '../../../components/custom/type-selection-card/type-selection-card';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-lf-type-selection',
  standalone: true,
  imports: [OnboardingShell, TypeSelectionCard, HlmButton],
  template: `
    <app-onboarding-shell>
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-foreground">Are you an individual or group?</h1>
        <p class="mt-2 text-sm text-muted-foreground">Select an option</p>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-4">
        <app-type-selection-card
          type="individual"
          title="Individual"
          subtitle="Researcher, Sole Lawyer, Student"
        />
        <app-type-selection-card
          type="group"
          title="Group"
          subtitle="Law Firm, Company, Student Body"
        />
      </div>

      <div class="mt-8 flex justify-center">
        <button hlmBtn class="px-8">Continue</button>
      </div>
    </app-onboarding-shell>
  `,
})
export class LfTypeSelection {}
