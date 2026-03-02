import { Component } from '@angular/core';
import { OnboardingShell } from '../../../components/custom/onboarding-shell/onboarding-shell';
import { SocialAuthButton } from '../../../components/custom/social-auth-button/social-auth-button';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-st-create-account',
  standalone: true,
  imports: [OnboardingShell, SocialAuthButton, HlmButton, HlmInput, HlmLabel],
  template: `
    <app-onboarding-shell>
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-foreground">Create your account</h1>
        <p class="mt-2 text-sm text-muted-foreground">
          Please use your university email as this<br>will verify that you are a student.
        </p>
      </div>

      <div class="mx-auto mt-8 max-w-sm space-y-4">
        <div class="space-y-1.5">
          <label hlmLabel>University email</label>
          <input hlmInput type="email" placeholder="name@university.com" class="w-full" />
        </div>

        <div class="space-y-1.5">
          <label hlmLabel>Password</label>
          <input hlmInput type="password" placeholder="password" class="w-full" />
        </div>

        <button hlmBtn class="w-full">Submit</button>

        <p class="text-center text-xs text-muted-foreground">
          When you submit your email and password we<br>will send you an authorisation code
        </p>
      </div>

      <div class="mx-auto mt-6 max-w-sm space-y-3">
        <app-social-auth-button provider="google" />
        <app-social-auth-button provider="microsoft" />
      </div>

      <p class="mt-6 text-center text-xs text-muted-foreground">
        By signing in you agree to our <a class="font-semibold text-foreground">Terms of Services</a>,<br>
        and our <a class="font-semibold text-foreground">Data Processing Agreement</a>
      </p>
    </app-onboarding-shell>
  `,
})
export class StCreateAccount {}
