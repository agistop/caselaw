import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-screen-index',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-background p-8">
      <div class="mx-auto max-w-2xl">
        <h1 class="font-kalice text-3xl italic text-foreground">CaseLaw</h1>
        <p class="mt-2 text-sm text-muted-foreground">Onboarding screen index — click to preview each screen</p>

        <div class="mt-8 space-y-8">
          <!-- Law Firm Flow -->
          <div>
            <h2 class="text-lg font-semibold text-foreground">Law Firm Flow</h2>
            <ul class="mt-3 space-y-1">
              @for (screen of lawFirmScreens; track screen.path) {
                <li>
                  <a [routerLink]="screen.path" class="text-sm text-primary underline-offset-4 hover:underline">
                    {{ screen.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Student Flow -->
          <div>
            <h2 class="text-lg font-semibold text-foreground">Student Flow</h2>
            <ul class="mt-3 space-y-1">
              @for (screen of studentScreens; track screen.path) {
                <li>
                  <a [routerLink]="screen.path" class="text-sm text-primary underline-offset-4 hover:underline">
                    {{ screen.label }}
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ScreenIndex {
  readonly lawFirmScreens = [
    { path: '/law-firm/0-type-selection', label: '0 — Type Selection (unselected)' },
    { path: '/law-firm/1-persona-closed', label: '1 — Persona Dropdown Closed' },
    { path: '/law-firm/2-persona-open', label: '2 — Persona Dropdown Open' },
    { path: '/law-firm/3-create-account', label: '3 — Create Account' },
    { path: '/law-firm/4-firm-details', label: '4 — Firm Details Modal (step 1/4)' },
    { path: '/law-firm/5-collaborators-empty', label: '5 — Add Collaborators Empty (step 2/4)' },
    { path: '/law-firm/6-collaborators-filled', label: '6 — Add Collaborators Filled (step 2/4)' },
    { path: '/law-firm/7-terms-privacy', label: '7 — Terms & Privacy (step 3/4)' },
    { path: '/law-firm/8-choose-plan', label: '8 — Choose Your Plan (step 4/4)' },
  ];

  readonly studentScreens = [
    { path: '/student/0-type-selection', label: '0 — Type Selection (Individual selected)' },
    { path: '/student/1-persona-open', label: '1 — Persona Dropdown Open (Student highlighted)' },
    { path: '/student/2-create-account', label: '2 — Create Account' },
    { path: '/student/3-student-details', label: '3 — Student Details Modal (step 1/4)' },
    { path: '/student/4-collaborators-empty', label: '4 — Add Collaborators Empty (step 2/4)' },
    { path: '/student/5-collaborators-filled', label: '5 — Add Collaborators Filled (step 2/4)' },
    { path: '/student/6-terms-privacy', label: '6 — Terms & Privacy (step 3/4)' },
    { path: '/student/7-choose-plan', label: '7 — Choose Your Plan (step 4/4)' },
  ];
}
