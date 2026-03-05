import { Component } from '@angular/core';

/**
 * OnboardingShell — full-page layout wrapper for pre-auth onboarding screens.
 *
 * @status design-spec
 *
 * No inputs — content is projected via `<ng-content>`.
 *
 * ## Tokens
 * `bg-background`, `text-foreground`, `text-muted-foreground`, `font-kalice`
 *
 * ## Engineering Handoff
 * - Wire the "Log in ›" link with `routerLink` to the login route.
 * - Consider extracting the CaseLaw wordmark into a shared component.
 */
@Component({
  selector: 'app-onboarding-shell',
  standalone: true,
  template: `
    <div class="relative min-h-screen bg-background">
      <!-- Wordmark -->
      <div class="pt-16 pb-8 text-center">
        <span class="font-kalice italic text-xl text-foreground">CaseLaw</span>
      </div>

      <!-- Content slot -->
      <div class="mx-auto max-w-xl px-6">
        <ng-content />
      </div>

      <!-- Footer -->
      <div class="pb-12 pt-8 text-center">
        <span class="text-sm text-muted-foreground">Already have an account? </span>
        <a class="text-sm font-semibold text-foreground">Log in ›</a>
      </div>
    </div>
  `,
})
export class OnboardingShell {}
