import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LfFirmDetails } from '../law-firm/firm-details';
import { StStudentDetails } from '../student/student-details';

@Component({
  selector: 'app-compare-details',
  standalone: true,
  imports: [RouterLink, LfFirmDetails, StStudentDetails],
  template: `
    <div class="sticky top-0 z-50 flex items-center gap-6 border-b border-border bg-background/95 px-6 py-3 backdrop-blur-sm">
      <a routerLink="/" class="text-xs text-muted-foreground hover:text-foreground">&larr; Gallery</a>
      <span class="text-sm font-semibold text-foreground">Details</span>
      <div class="flex gap-1">
        <button (click)="tab.set('lf')" class="rounded-md px-3 py-1 text-sm transition-colors" [class]="tab() === 'lf' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'">Law Firm</button>
        <button (click)="tab.set('st')" class="rounded-md px-3 py-1 text-sm transition-colors" [class]="tab() === 'st' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'">Student</button>
      </div>
    </div>
    <div class="relative min-h-screen" style="transform: translateZ(0)">
      @if (tab() === 'lf') {
        <app-lf-firm-details />
      } @else {
        <app-st-student-details />
      }
    </div>
  `,
})
export class CompareDetails {
  readonly tab = signal<'lf' | 'st'>('lf');
}
