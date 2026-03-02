import { Component, input } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
  selector: 'app-legal-consent-row',
  standalone: true,
  imports: [HlmSwitch],
  template: `
    <div class="flex items-start gap-3">
      <hlm-switch
        class="mt-0.5 data-[state=checked]:bg-success"
        [checked]="checked()"
      />
      <span class="text-sm text-foreground">
        <ng-content />
      </span>
    </div>
  `,
})
export class LegalConsentRow {
  readonly checked = input(false);
}
