import { Component } from '@angular/core';

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
