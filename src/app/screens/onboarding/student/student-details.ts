import { Component } from '@angular/core';
import { ModalShell } from '../../../components/custom/modal-shell/modal-shell';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-st-student-details',
  standalone: true,
  imports: [ModalShell, HlmButton, HlmInput, HlmLabel],
  template: `
    <app-modal-shell [totalSteps]="4" [currentStep]="1">
      <!-- Header (above progress) -->
      <div header>
        <h2 class="text-lg font-semibold text-foreground">
          CaseLaw is free for *uni name* students until graduation
        </h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Complete the following details to create the right account for you.
        </p>
      </div>

      <!-- Fields -->
      <div class="space-y-4">
        <div class="space-y-1.5">
          <label hlmLabel>Full name</label>
          <input hlmInput placeholder="Your name" class="w-full" />
        </div>

        <div class="space-y-1.5">
          <label hlmLabel>Account name</label>
          <input hlmInput placeholder="Account name" class="w-full" />
        </div>

        <div class="space-y-1.5">
          <label hlmLabel>What is your home address?</label>
          <input hlmInput placeholder="Address" class="w-full" />
        </div>

        <a class="inline-block text-sm font-medium text-foreground">+ Add a floor, suite, box, etc</a>

        <div class="space-y-1.5">
          <label hlmLabel>When do you graduate?</label>
          <div class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs">
            <span class="text-muted-foreground">Select date</span>
            <svg class="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>

        <div class="space-y-1.5">
          <label hlmLabel>What is your student code?</label>
          <div class="relative">
            <input hlmInput placeholder="Enter code" class="w-full pr-10" />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div footer class="mt-8 flex justify-end border-t border-border pt-6">
        <button hlmBtn class="gap-2">
          Continue
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </app-modal-shell>
  `,
})
export class StStudentDetails {}
