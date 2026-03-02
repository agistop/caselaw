import { Component } from '@angular/core';
import { OnboardingShell } from '../../../components/custom/onboarding-shell/onboarding-shell';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-lf-persona-closed',
  standalone: true,
  imports: [OnboardingShell, HlmButton, HlmLabel],
  template: `
    <app-onboarding-shell>
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-foreground">Which best describes you</h1>
        <p class="mt-2 text-sm text-muted-foreground">Select one of the following</p>
      </div>

      <div class="mx-auto mt-10 max-w-sm space-y-2">
        <label hlmLabel>Group category</label>
        <div class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs">
          <span class="text-muted-foreground">Law firm...</span>
          <svg class="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>
          </svg>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <button hlmBtn class="px-8">Continue</button>
      </div>
    </app-onboarding-shell>
  `,
})
export class LfPersonaClosed {}
