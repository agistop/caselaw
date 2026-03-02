import { Component } from '@angular/core';
import { ProgressSteps } from '../../../components/custom/progress-steps/progress-steps';
import { LegalConsentRow } from '../../../components/custom/legal-consent-row/legal-consent-row';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-lf-terms-privacy',
  standalone: true,
  imports: [ProgressSteps, LegalConsentRow, HlmButton],
  template: `
    <!-- Overlay backdrop -->
    <div class="fixed inset-0 z-40 bg-black/50"></div>

    <!-- Modal -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-lg">
        <!-- Progress -->
        <div class="mb-6 flex justify-start">
          <app-progress-steps [totalSteps]="4" [currentStep]="3" />
        </div>

        <!-- Header -->
        <h2 class="text-lg font-semibold text-foreground">Terms of Service & Privacy Policy</h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Please review and accept our terms and privacy policy to continue.
        </p>

        <!-- Scrollable ToS -->
        <div class="mt-6 max-h-48 overflow-y-auto rounded-md border border-border p-4 text-xs leading-relaxed text-muted-foreground">
          <p class="mb-2 font-semibold uppercase text-foreground">TERMS OF USE / SERVICE AGREEMENT</p>
          <p class="mb-2">Date of last revision: November 5, 2024</p>
          <p class="mb-2">
            This terms of use or service agreement ("Agreement") is between SiteGuide Technologies, Inc.
            d/b/a Pinecrest, a Delaware Corporation ("Pinecrest," "Company," "we," "us," "our," or "ourselves") and
            the person or entity ("You" or "your") that has decided to use our services; any of our websites or
            apps or any features, products, graphics, text, images, photos, audio, video, location data,
            computer code, and all other terms of data and communications (collectively, "Services").
          </p>
          <p class="mb-2 font-semibold uppercase text-foreground">
            YOU MUST CONSENT TO THIS AGREEMENT TO USE OUR SERVICES. If you do not accept and
          </p>
        </div>

        <!-- Consent toggles -->
        <div class="mt-6 space-y-4">
          <app-legal-consent-row [checked]="true">
            I agree to CaseLaw's <a class="font-semibold underline">Terms of Service</a> and <a class="font-semibold underline">Privacy Policy</a>.
          </app-legal-consent-row>

          <app-legal-consent-row [checked]="true">
            I want to receive product updates and launch emails. You can unsubscribe at any time.
          </app-legal-consent-row>
        </div>

        <!-- Footer -->
        <div class="mt-6 flex items-center justify-between">
          <button hlmBtn variant="ghost" class="text-sm">Go back</button>
          <button hlmBtn>Accept</button>
        </div>
      </div>
    </div>
  `,
})
export class LfTermsPrivacy {}
