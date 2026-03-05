import { Component, input } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';

/**
 * InviteLinkCopy — read-only URL field with a copy-to-clipboard button.
 *
 * @status design-spec
 *
 * @input url — string, default placeholder URL. The invite link to display.
 *
 * ## Tokens
 * `border-input`, `border-border`
 *
 * ## Engineering Handoff
 * - Wire `navigator.clipboard.writeText()` on the Copy button click.
 * - Swap button label to "Copied!" with a ~2s timeout, then revert.
 * - URL should come from the API (generated invite link).
 */
@Component({
  selector: 'app-invite-link-copy',
  standalone: true,
  imports: [HlmButton, HlmInput],
  template: `
    <div class="flex gap-2">
      <input hlmInput readonly [value]="url()" class="flex-1 text-sm" />
      <button hlmBtn variant="outline" class="shrink-0 gap-2">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
        </svg>
        Copy
      </button>
    </div>
  `,
})
export class InviteLinkCopy {
  readonly url = input('https://caselaw.io/invite/8xB82hv4nsd9v5npK823nf...');
}
