import { Component } from '@angular/core';
import { ProgressSteps } from '../../../components/custom/progress-steps/progress-steps';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-lf-firm-details',
  standalone: true,
  imports: [ProgressSteps, HlmButton, HlmInput, HlmLabel],
  template: `
    <!-- Overlay backdrop -->
    <div class="fixed inset-0 z-40 bg-black/50"></div>

    <!-- Modal -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-lg">
        <!-- Progress -->
        <div class="mb-6 flex justify-start">
          <app-progress-steps [totalSteps]="4" [currentStep]="1" />
        </div>

        <!-- Header -->
        <h2 class="text-lg font-semibold text-foreground">
          Law firm's get a months free access to CaseLaw
        </h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Complete the following details to create the right account for you.
        </p>

        <!-- Fields -->
        <div class="mt-6 space-y-4">
          <div class="space-y-1.5">
            <label hlmLabel>Full name</label>
            <input hlmInput placeholder="Your name" class="w-full" />
          </div>

          <div class="space-y-1.5">
            <label hlmLabel>What is your firm's name?</label>
            <input hlmInput placeholder="Business name" class="w-full" />
          </div>

          <a class="inline-block text-sm font-medium text-foreground">+ Add custom account name</a>

          <div class="space-y-1.5">
            <label hlmLabel>What is the firm's physical address?</label>
            <input hlmInput placeholder="Address" class="w-full" />
          </div>

          <a class="inline-block text-sm font-medium text-foreground">+ Add a floor, suite, box, etc</a>
          <br>
          <a class="inline-block text-sm font-medium text-foreground">+ Add separate billing address</a>

          <div class="space-y-1.5">
            <label hlmLabel>Country</label>
            <div class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs">
              <span class="text-muted-foreground">Country</span>
              <svg class="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          <div class="space-y-1.5">
            <label hlmLabel>Firm size</label>
            <div class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs">
              <span class="text-muted-foreground">1 - 5</span>
              <svg class="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          <div class="space-y-1.5">
            <label hlmLabel>What is the firm's EIN?</label>
            <input hlmInput placeholder="EIN" class="w-full" />
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-6 flex justify-end">
          <button hlmBtn class="gap-2">
            Continue
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class LfFirmDetails {}
