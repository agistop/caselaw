import { Component } from '@angular/core';
import { ProgressSteps } from '../../../components/custom/progress-steps/progress-steps';
import { MultiTagInput } from '../../../components/custom/multi-tag-input/multi-tag-input';
import { LegalConsentRow } from '../../../components/custom/legal-consent-row/legal-consent-row';
import { InviteLinkCopy } from '../../../components/custom/invite-link-copy/invite-link-copy';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-lf-collaborators-empty',
  standalone: true,
  imports: [ProgressSteps, MultiTagInput, LegalConsentRow, InviteLinkCopy, HlmButton, HlmInput, HlmLabel],
  template: `
    <!-- Overlay backdrop -->
    <div class="fixed inset-0 z-40 bg-black/50"></div>

    <!-- Modal -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-lg">
        <!-- Progress -->
        <div class="mb-6 flex justify-start">
          <app-progress-steps [totalSteps]="4" [currentStep]="2" />
        </div>

        <!-- Header -->
        <h2 class="text-lg font-semibold text-foreground">
          Add collaborators to *account name*
        </h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Send invites to up to the co-workers you would like to collaborate with.
        </p>

        <!-- Email input -->
        <div class="mt-6 space-y-4">
          <div class="space-y-1.5">
            <label hlmLabel>Enter co-worker emails</label>
            <app-multi-tag-input placeholder="example@email.com" />
          </div>

          <p class="text-xs text-muted-foreground">
            *Please note, all users will need to be approved to gain access.
          </p>

          <!-- Toggle: Enable invites by domain -->
          <app-legal-consent-row [checked]="true">
            Enable invites by domain
            <svg class="ml-1 inline h-3.5 w-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </app-legal-consent-row>

          <div class="space-y-1.5">
            <label hlmLabel>Email Domain</label>
            <input hlmInput placeholder="www.yourbusiness.com" class="w-full" />
          </div>

          <!-- Copy invite link -->
          <div class="space-y-1.5">
            <label hlmLabel>Copy invite link*</label>
            <app-invite-link-copy />
          </div>

          <p class="text-xs text-muted-foreground">
            * Please note, all users will need to be approved to gain access.
          </p>

          <!-- Auto-approve toggle -->
          <app-legal-consent-row>
            Auto-approve anyone from my domain
            <svg class="ml-1 inline h-3.5 w-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </app-legal-consent-row>
        </div>

        <!-- Footer -->
        <div class="mt-6 flex items-center justify-between">
          <button hlmBtn variant="ghost" class="text-sm">Go back</button>
          <button hlmBtn class="gap-2">
            Continue
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class LfCollaboratorsEmpty {}
