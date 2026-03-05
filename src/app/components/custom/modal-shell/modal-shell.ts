import { Component, input } from '@angular/core';
import { ProgressSteps } from '../progress-steps/progress-steps';

/**
 * ModalShell — static design-spec wrapper for onboarding modal screens.
 *
 * This is a visual-only composition for design handoff. It renders the modal
 * as permanently "open" with no open/close state, focus trapping, or
 * keyboard/escape handling.
 *
 * ## Engineering Handoff
 *
 * Replace this component with spartan's `HlmDialog` + `BrnDialog` when
 * implementing the real flow. The migration path:
 *
 * 1. Wrap each modal screen in `<hlm-dialog>` with a `<hlm-dialog-content>`
 *    instead of `<app-modal-shell>`.
 * 2. Use `BrnDialogTrigger` or `HlmDialogService` to manage open/close state.
 * 3. `<hlm-dialog-overlay>` replaces the `bg-black/50` backdrop div.
 * 4. Move footer buttons into `<hlm-dialog-footer>` and heading into
 *    `<hlm-dialog-header>` / `<hlm-dialog-title>`.
 * 5. `ProgressSteps` stays as-is — embed it inside `<hlm-dialog-content>`.
 *
 * The helm components are already scaffolded at `src/app/components/helm/dialog/`.
 * Brain primitives: `@spartan-ng/brain/dialog` (BrnDialog, BrnDialogRef, etc.)
 */
@Component({
  selector: 'app-modal-shell',
  standalone: true,
  imports: [ProgressSteps],
  template: `
    <!-- Overlay backdrop -->
    <div class="fixed inset-0 z-40 bg-black/50"></div>

    <!-- Modal -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-card shadow-lg">
        <!-- Header (optional slot, rendered above progress) -->
        <div class="p-8 pb-0">
          <ng-content select="[header]" />
        </div>

        <!-- Separator + Progress -->
        <div class="border-t border-border mx-8 my-6"></div>
        <div class="mx-8 mb-8 flex justify-start">
          <app-progress-steps [totalSteps]="totalSteps()" [currentStep]="currentStep()" />
        </div>

        <!-- Body -->
        <div class="px-8">
          <ng-content />
        </div>

        <!-- Footer -->
        <div class="px-8 pb-8">
          <ng-content select="[footer]" />
        </div>
      </div>
    </div>
  `,
})
export class ModalShell {
  readonly totalSteps = input(4);
  readonly currentStep = input(1);
}
