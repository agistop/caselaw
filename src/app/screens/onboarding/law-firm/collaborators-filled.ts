import { Component } from '@angular/core';
import { ModalShell } from '../../../components/custom/modal-shell/modal-shell';
import { MultiTagInput } from '../../../components/custom/multi-tag-input/multi-tag-input';
import { LegalConsentRow } from '../../../components/custom/legal-consent-row/legal-consent-row';
import { InviteLinkCopy } from '../../../components/custom/invite-link-copy/invite-link-copy';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-lf-collaborators-filled',
  standalone: true,
  imports: [ModalShell, MultiTagInput, LegalConsentRow, InviteLinkCopy, HlmButton, HlmInput, HlmLabel],
  template: `
    <app-modal-shell [totalSteps]="4" [currentStep]="2">
      <!-- Header (above progress) -->
      <div header>
        <h2 class="text-lg font-semibold text-foreground">
          Add collaborators to *account name*
        </h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Send invites to up to the co-workers you would like to collaborate with.
        </p>
      </div>

      <!-- Section 1: Email input + domain toggle -->
      <div class="space-y-6">
        <div class="space-y-1.5">
          <label hlmLabel>Enter co-worker emails</label>
          <app-multi-tag-input [tags]="emailTags" />
        </div>

        <p class="text-xs text-muted-foreground">
          *Please note, all users will need to be approved to gain access.
        </p>

        <app-legal-consent-row [checked]="true" align="right">
          Enable invites by domain
          <svg class="ml-1 inline h-3.5 w-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </app-legal-consent-row>

        <div class="space-y-1.5">
          <label hlmLabel>Email Domain</label>
          <input hlmInput placeholder="www.yourbusiness.com" class="w-full" />
        </div>
      </div>

      <!-- Separator -->
      <div class="my-6 border-t border-border"></div>

      <!-- Section 2: Invite link + auto-approve -->
      <div class="space-y-6">
        <div class="space-y-1.5">
          <label hlmLabel>Copy invite link*</label>
          <app-invite-link-copy />
        </div>

        <p class="text-xs text-muted-foreground">
          * Please note, all users will need to be approved to gain access.
        </p>

        <app-legal-consent-row align="right">
          Auto-approve anyone from my domain
          <svg class="ml-1 inline h-3.5 w-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </app-legal-consent-row>
      </div>

      <!-- Footer -->
      <div footer class="mt-8 flex items-center justify-between border-t border-border pt-6">
        <button hlmBtn variant="ghost" class="text-sm">Go back</button>
        <button hlmBtn class="gap-2">
          Continue
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </app-modal-shell>
  `,
})
export class LfCollaboratorsFilled {
  readonly emailTags = [
    'john@lawfirm.com', 'jane@lawfirm.com', 'lisa@lawfirm.com',
    'david@lawfirm.com', 'chris@lawfirm.com',
    'john@lawfirm.com', 'jane@lawfirm.com', 'lisa@lawfirm.com',
    'david@lawfirm.com', 'chris@lawfirm.com',
  ];
}
