import { Component, input } from '@angular/core';

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
