import { Component, input } from '@angular/core';

/**
 * MultiTagInput — email tag input for collaborator invites.
 *
 * @status design-spec
 *
 * @input tags — `string[]`, default `[]`. Pre-populated email tags.
 * @input placeholder — string, default `'example@email.com'`. Shown when empty.
 *
 * ## Tokens
 * `border-input`, `bg-secondary`, `text-foreground`, `text-muted-foreground`
 *
 * ## Engineering Handoff
 * - Implement as `ControlValueAccessor` for reactive form integration.
 * - Handle Enter/comma keypress to add tags, × button to remove.
 * - Add email format validation before accepting a tag.
 * - Emit tag list changes to parent form control.
 */
@Component({
  selector: 'app-multi-tag-input',
  standalone: true,
  template: `
    <div class="flex min-h-[44px] w-full flex-wrap gap-1.5 rounded-md border border-input bg-transparent px-3 py-2">
      @for (tag of tags(); track tag) {
        <span class="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-sm text-foreground">
          {{ tag }}
          <button class="ml-0.5 text-muted-foreground hover:text-foreground">×</button>
        </span>
      }
      @if (tags().length === 0) {
        <span class="text-sm text-muted-foreground">{{ placeholder() }}</span>
      }
    </div>
  `,
})
export class MultiTagInput {
  readonly tags = input<string[]>([]);
  readonly placeholder = input('example@email.com');
}
