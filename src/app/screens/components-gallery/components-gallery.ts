import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TypeSelectionCard } from '../../components/custom/type-selection-card/type-selection-card';
import { ProgressSteps } from '../../components/custom/progress-steps/progress-steps';
import { SocialAuthButton } from '../../components/custom/social-auth-button/social-auth-button';
import { MultiTagInput } from '../../components/custom/multi-tag-input/multi-tag-input';
import { LegalConsentRow } from '../../components/custom/legal-consent-row/legal-consent-row';
import { InviteLinkCopy } from '../../components/custom/invite-link-copy/invite-link-copy';
import { PlanCard } from '../../components/custom/plan-card/plan-card';

import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
  selector: 'app-components-gallery',
  standalone: true,
  imports: [
    RouterLink,
    TypeSelectionCard,
    ProgressSteps,
    SocialAuthButton,
    MultiTagInput,
    LegalConsentRow,
    InviteLinkCopy,
    PlanCard,
    HlmButton,
    HlmInput,
    HlmLabel,
    HlmSwitch,
    HlmBadge,
  ],
  template: `
    <div class="flex min-h-screen">

      <!-- ═══════════════════════════════════════════════ -->
      <!-- SIDEBAR                                        -->
      <!-- ═══════════════════════════════════════════════ -->
      <aside class="fixed left-0 top-0 z-30 flex h-screen w-56 flex-col overflow-y-auto border-r border-neutral-800 bg-neutral-950 px-4 py-6 text-sm">
        <!-- Wordmark -->
        <div class="mb-6">
          <span class="font-kalice text-lg italic text-white">CaseLaw</span>
          <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">Design System</p>
        </div>

        <!-- Tokens nav -->
        <p class="mb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">Design Tokens</p>
        <nav class="mb-6 flex flex-col gap-0.5">
          @for (item of sidebarTokens; track item.id) {
            <a [href]="'#' + item.id" class="rounded-md px-2 py-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white">
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Spartan primitives nav -->
        <p class="mb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">ng-ui
          <span class="ml-1 inline-block rounded bg-neutral-800 px-1.5 py-0.5 text-[9px] text-neutral-400">spartan</span>
        </p>
        <nav class="mb-6 flex flex-col gap-0.5">
          @for (item of sidebarSpartan; track item.id) {
            <a [href]="'#' + item.id" class="rounded-md px-2 py-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white">
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Custom compositions nav -->
        <p class="mb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">CaseLaw UI
          <span class="ml-1 inline-block rounded bg-neutral-800 px-1.5 py-0.5 text-[9px] text-neutral-400">custom</span>
        </p>
        <nav class="mb-6 flex flex-col gap-0.5">
          @for (item of sidebarCustom; track item.id) {
            <a [href]="'#' + item.id" class="rounded-md px-2 py-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white">
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Screens nav -->
        <p class="mb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">Screens
          <span class="ml-1 inline-block rounded bg-neutral-800 px-1.5 py-0.5 text-[9px] text-neutral-400">routes</span>
        </p>
        <nav class="flex flex-col gap-0.5">
          @for (item of sidebarScreens; track item.path) {
            <a [routerLink]="item.path" class="rounded-md px-2 py-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white">
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Footer link -->
        <div class="mt-auto pt-6">
          <a routerLink="/screens" class="text-xs text-neutral-500 hover:text-neutral-300">Screen Index &rarr;</a>
        </div>
      </aside>

      <!-- ═══════════════════════════════════════════════ -->
      <!-- MAIN CONTENT                                   -->
      <!-- ═══════════════════════════════════════════════ -->
      <main class="ml-56 flex-1 bg-background">
        <!-- Hero -->
        <div class="border-b border-border bg-card px-10 py-10">
          <h1 class="font-kalice text-3xl italic text-foreground">CaseLaw</h1>
          <p class="mt-1 text-base text-foreground">Design System Showcase — Onboarding Flow</p>
          <p class="mt-2 text-sm text-muted-foreground">
            Visual component reference for the CaseLaw onboarding experience. Every component below uses the exact Tailwind classes that ship in Angular templates —
            what you see here is what the devs will build.
          </p>

          <!-- Stats -->
          <div class="mt-8 grid grid-cols-4 gap-4">
            @for (stat of stats; track stat.label) {
              <div class="rounded-xl border border-border bg-background px-5 py-4">
                <p class="text-3xl font-bold text-foreground">{{ stat.value }}</p>
                <p class="mt-1 text-xs text-muted-foreground">{{ stat.label }}</p>
              </div>
            }
          </div>
        </div>

        <div class="space-y-16 px-10 py-12">

          <!-- ══════════════════════════════════════════ -->
          <!-- HOW TO USE THIS REPO                      -->
          <!-- ══════════════════════════════════════════ -->

          <section class="rounded-xl border border-border bg-muted/50 p-6">
            <h2 class="text-lg font-semibold text-foreground">How to use this repo</h2>
            <div class="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <h3 class="text-sm font-semibold text-foreground">What this is</h3>
                <p class="mt-1 text-xs text-muted-foreground">
                  A design-system reference repo. Components are static, visual-only specs — no business logic, no API calls, no state management. Code is the source of truth; Figma stays for exploration.
                </p>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-foreground">How to use it</h3>
                <p class="mt-1 text-xs text-muted-foreground">
                  Browse the gallery for component specs, tokens, and screen compositions. Each component has a
                  <code class="rounded bg-muted px-1 py-0.5 text-[10px]">&#64;status</code> tag:
                  <code class="rounded bg-muted px-1 py-0.5 text-[10px]">design-spec</code> needs production wiring;
                  <code class="rounded bg-muted px-1 py-0.5 text-[10px]">production-ready</code> can be used as-is.
                  JSDoc on each component lists exactly what to wire.
                </p>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-foreground">Monorepo integration</h3>
                <p class="mt-1 text-xs text-muted-foreground">
                  Components live in <code class="rounded bg-muted px-1 py-0.5 text-[10px]">src/app/components/</code>
                  (helm = spartan primitives, custom = CaseLaw compositions). Copy the <code class="rounded bg-muted px-1 py-0.5 text-[10px]">components/</code> folder into your monorepo and adjust import paths to match your tsconfig aliases. No runtime dependencies beyond Angular + spartan.ng + Tailwind.
                </p>
              </div>
            </div>
          </section>

          <!-- ══════════════════════════════════════════ -->
          <!-- DESIGN TOKENS                             -->
          <!-- ══════════════════════════════════════════ -->

          <!-- COLOR PALETTE -->
          <section id="colors">
            <h2 class="text-xl font-semibold text-foreground">Color Palette</h2>

            <!-- Neutral Scale -->
            <h3 class="mb-4 mt-6 text-sm font-semibold text-foreground">Neutral Scale</h3>
            <div class="grid grid-cols-6 gap-3">
              @for (color of neutralColors; track color.name) {
                <div>
                  <div class="h-20 rounded-lg border border-border" [style.background-color]="color.value"></div>
                  <p class="mt-2 text-xs font-semibold text-foreground">{{ color.name }}</p>
                  <p class="text-xs text-muted-foreground">{{ color.hex }}</p>
                </div>
              }
            </div>

            <!-- Semantic Colors -->
            <h3 class="mb-4 mt-8 text-sm font-semibold text-foreground">Semantic Colors</h3>
            <div class="grid grid-cols-6 gap-3">
              @for (color of semanticColors; track color.name) {
                <div>
                  <div class="h-20 rounded-lg border border-border" [style.background-color]="color.value"></div>
                  <p class="mt-2 text-xs font-semibold text-foreground">{{ color.name }}</p>
                  <p class="text-xs text-muted-foreground">{{ color.hex }}</p>
                </div>
              }
            </div>

            <!-- Spartan Variable Map -->
            <h3 class="mb-4 mt-8 text-sm font-semibold text-foreground">Spartan CSS Variable Map</h3>
            <div class="overflow-x-auto rounded-lg border border-border">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-border bg-muted/50">
                    <th class="px-4 py-2 text-left font-medium text-muted-foreground">Variable</th>
                    <th class="px-4 py-2 text-left font-medium text-muted-foreground">Swatch</th>
                    <th class="px-4 py-2 text-left font-medium text-muted-foreground">OKLCH</th>
                    <th class="px-4 py-2 text-left font-medium text-muted-foreground">Tailwind Class</th>
                    <th class="px-4 py-2 text-left font-medium text-muted-foreground">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  @for (v of variableMap; track v.variable) {
                    <tr class="border-b border-border/50">
                      <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5 text-xs">{{ v.variable }}</code></td>
                      <td class="px-4 py-2"><span class="inline-block h-5 w-5 rounded border border-border" [style.background-color]="v.hex"></span></td>
                      <td class="px-4 py-2 font-mono text-xs text-muted-foreground">{{ v.oklch }}</td>
                      <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5 text-xs">{{ v.twClass }}</code></td>
                      <td class="px-4 py-2 text-xs text-muted-foreground">{{ v.usage }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </section>

          <!-- TYPOGRAPHY -->
          <section id="typography">
            <h2 class="text-xl font-semibold text-foreground">Typography Scale</h2>
            <div class="mt-6 space-y-6">
              @for (t of typographyScale; track t.label) {
                <div>
                  <p class="text-xs text-muted-foreground">
                    <code class="rounded bg-muted px-1.5 py-0.5">{{ t.class }}</code>
                    <span class="ml-2">{{ t.size }}</span>
                    <span class="ml-2">&middot;</span>
                    <span class="ml-2">{{ t.weight }}</span>
                  </p>
                  <p [class]="t.renderClass + ' mt-1 text-foreground'">{{ t.label }}</p>
                </div>
              }
            </div>

            <!-- Kalice Specimens -->
            <h3 class="mt-10 text-lg font-semibold text-foreground">Kalice — Serif Display</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              <code class="rounded bg-muted px-1.5 py-0.5">font-kalice</code> — Kalice Trial Medium (500). Used for wordmark and display headings only.
            </p>
            <div class="mt-6 space-y-6 rounded-lg border border-border bg-card p-6">
              @for (k of kaliceSpecimens; track k.label) {
                <div>
                  <p class="text-xs text-muted-foreground">
                    <code class="rounded bg-muted px-1.5 py-0.5">{{ k.twClass }}</code>
                    <span class="ml-2">{{ k.size }}</span>
                    <span class="ml-2">&middot;</span>
                    <span class="ml-2">{{ k.style }}</span>
                  </p>
                  <p [class]="k.renderClass + ' mt-1 text-foreground'">{{ k.label }}</p>
                </div>
              }
            </div>
          </section>

          <!-- SPACING -->
          <section id="spacing">
            <h2 class="text-xl font-semibold text-foreground">Spacing Scale</h2>
            <div class="mt-6 space-y-3">
              @for (s of spacingScale; track s.name) {
                <div class="flex items-center gap-4">
                  <span class="w-16 text-right text-xs font-medium text-muted-foreground">{{ s.name }}</span>
                  <div class="h-4 rounded-sm bg-foreground" [style.width]="s.px + 'px'"></div>
                  <span class="text-xs text-muted-foreground">{{ s.px }}px</span>
                </div>
              }
            </div>
          </section>

          <!-- BORDER RADIUS -->
          <section id="radius">
            <h2 class="text-xl font-semibold text-foreground">Border Radius</h2>
            <div class="mt-6 flex flex-wrap items-end gap-6">
              @for (r of radiusScale; track r.name) {
                <div class="flex flex-col items-center gap-2">
                  <div class="flex h-20 w-20 items-center justify-center border-2 border-foreground" [style.border-radius]="r.value"></div>
                  <p class="text-xs font-semibold text-foreground">{{ r.name }}</p>
                  <p class="text-xs text-muted-foreground">{{ r.value }}</p>
                </div>
              }
            </div>
          </section>

          <!-- SHADOWS -->
          <section id="shadows">
            <h2 class="text-xl font-semibold text-foreground">Shadows / Elevation</h2>
            <div class="mt-6 flex flex-wrap items-end gap-6">
              @for (s of shadowScale; track s.name) {
                <div class="flex flex-col items-center gap-2">
                  <div class="flex h-24 w-28 items-center justify-center rounded-lg border border-border bg-card" [class]="s.class"></div>
                  <p class="text-xs font-semibold text-foreground">{{ s.name }}</p>
                </div>
              }
            </div>
          </section>


          <!-- ══════════════════════════════════════════ -->
          <!-- SPARTAN PRIMITIVES                        -->
          <!-- ══════════════════════════════════════════ -->

          <div class="border-t border-border pt-12">
            <p class="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Spartan Primitives</p>
          </div>

          <!-- BUTTON -->
          <section id="button">
            <h2 class="text-lg font-semibold text-foreground">Button</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              <code class="rounded bg-muted px-1.5 py-0.5 text-xs">hlmBtn</code> directive with variant input
            </p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex flex-wrap items-center gap-3">
                <button hlmBtn>Default</button>
                <button hlmBtn variant="outline">Outline</button>
                <button hlmBtn variant="ghost">Ghost</button>
                <button hlmBtn variant="destructive">Destructive</button>
              </div>
            </div>
          </section>

          <!-- INPUT -->
          <section id="input">
            <h2 class="text-lg font-semibold text-foreground">Input</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              <code class="rounded bg-muted px-1.5 py-0.5 text-xs">hlmInput</code> directive on <code class="rounded bg-muted px-1.5 py-0.5 text-xs">&lt;input&gt;</code>
            </p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="max-w-sm space-y-1.5">
                <label hlmLabel>Label</label>
                <input hlmInput placeholder="Placeholder text" class="w-full" />
              </div>
            </div>
          </section>

          <!-- SELECT (static) -->
          <section id="select">
            <h2 class="text-lg font-semibold text-foreground">Select</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              Static design-spec select. See
              <a href="#handoff" class="font-medium text-foreground underline underline-offset-4">handoff notes</a>
              for <code class="rounded bg-muted px-1.5 py-0.5 text-xs">BrnSelect</code> migration.
            </p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="max-w-sm space-y-1.5">
                <label hlmLabel>Country</label>
                <div class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs">
                  <span class="text-muted-foreground">Select an option</span>
                  <svg class="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </section>

          <!-- TOGGLE SWITCH -->
          <section id="toggle-switch">
            <h2 class="text-lg font-semibold text-foreground">Toggle Switch</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              <code class="rounded bg-muted px-1.5 py-0.5 text-xs">hlm-switch</code> with success color override
            </p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex items-center gap-8">
                <div class="flex items-center gap-2">
                  <hlm-switch />
                  <span class="text-sm text-muted-foreground">Off</span>
                </div>
                <div class="flex items-center gap-2">
                  <hlm-switch [checked]="true" class="data-[state=checked]:bg-success" />
                  <span class="text-sm text-muted-foreground">On (success)</span>
                </div>
              </div>
            </div>
          </section>

          <!-- BADGE -->
          <section id="badge">
            <h2 class="text-lg font-semibold text-foreground">Badge</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              <code class="rounded bg-muted px-1.5 py-0.5 text-xs">hlmBadge</code> directive
            </p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex flex-wrap items-center gap-3">
                <span hlmBadge>Default</span>
                <span hlmBadge variant="outline">Outline</span>
                <span hlmBadge class="border-success/20 bg-success/10 text-success">Most Popular</span>
              </div>
            </div>
          </section>

          <!-- TAG -->
          <section id="tag">
            <h2 class="text-lg font-semibold text-foreground">Tag</h2>
            <p class="mt-1 text-sm text-muted-foreground">Inline email tag chip with dismiss button</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex flex-wrap gap-1.5">
                <span class="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-sm text-foreground">
                  john&#64;lawfirm.com
                  <button class="ml-0.5 text-muted-foreground hover:text-foreground">&times;</button>
                </span>
                <span class="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-sm text-foreground">
                  jane&#64;lawfirm.com
                  <button class="ml-0.5 text-muted-foreground hover:text-foreground">&times;</button>
                </span>
              </div>
            </div>
          </section>


          <!-- ══════════════════════════════════════════ -->
          <!-- CASELAW CUSTOM COMPOSITIONS               -->
          <!-- ══════════════════════════════════════════ -->

          <div class="border-t border-border pt-12">
            <p class="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">CaseLaw UI — Custom Compositions</p>
          </div>

          <!-- ONBOARDING SHELL -->
          <section id="onboarding-shell">
            <h2 class="text-lg font-semibold text-foreground">Onboarding Shell</h2>
            <p class="mt-1 text-sm text-muted-foreground">Full-page layout wrapper — cannot embed inline, see live screens</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; OnboardingShell &rbrace; from 'src/app/components/custom/onboarding-shell/onboarding-shell'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex flex-wrap gap-3">
                <a routerLink="/law-firm/0-type-selection" class="text-sm text-primary underline-offset-4 hover:underline">Type Selection</a>
                <a routerLink="/law-firm/3-create-account" class="text-sm text-primary underline-offset-4 hover:underline">Create Account</a>
                <a routerLink="/student/2-create-account" class="text-sm text-primary underline-offset-4 hover:underline">Student Create Account</a>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-background</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-muted-foreground</code>
              </div>
            </div>
          </section>

          <!-- MODAL SHELL -->
          <section id="modal-shell">
            <h2 class="text-lg font-semibold text-foreground">Modal Shell</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              Reusable modal wrapper with progress steps. See
              <a href="#handoff" class="font-medium text-foreground underline underline-offset-4">handoff notes</a>
              for <code class="rounded bg-muted px-1.5 py-0.5 text-xs">HlmDialog</code> migration.
            </p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; ModalShell &rbrace; from 'src/app/components/custom/modal-shell/modal-shell'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="max-w-md">
                <div class="w-full rounded-lg border border-border bg-card p-6 shadow-lg">
                  <div class="mb-6 flex justify-start">
                    <app-progress-steps [totalSteps]="4" [currentStep]="2" />
                  </div>
                  <h2 class="text-lg font-semibold text-foreground">Modal Heading</h2>
                  <p class="mt-1 text-sm text-muted-foreground">Body content is projected via default ng-content slot.</p>
                  <div class="mt-6 flex items-center justify-between">
                    <button hlmBtn variant="ghost" class="text-sm">Go back</button>
                    <button hlmBtn class="gap-2">Continue</button>
                  </div>
                </div>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-card</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-border</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">shadow-lg</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-black/50</code>
              </div>
            </div>
          </section>

          <!-- TYPE SELECTION CARD -->
          <section id="type-selection-card">
            <h2 class="text-lg font-semibold text-foreground">Type Selection Card</h2>
            <p class="mt-1 text-sm text-muted-foreground">Account type picker — individual vs group</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; TypeSelectionCard &rbrace; from 'src/app/components/custom/type-selection-card/type-selection-card'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Individual</p>
                  <app-type-selection-card type="individual" title="Individual" subtitle="Student, solo practitioner" />
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Individual (selected)</p>
                  <app-type-selection-card type="individual" title="Individual" subtitle="Student, solo practitioner" [selected]="true" />
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Group</p>
                  <app-type-selection-card type="group" title="Group" subtitle="Firm, organization, team" />
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Group (selected)</p>
                  <app-type-selection-card type="group" title="Group" subtitle="Firm, organization, team" [selected]="true" />
                </div>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-card</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-border</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">ring-ring</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-muted-foreground</code>
              </div>
            </div>
          </section>

          <!-- PLAN CARD -->
          <section id="plan-card">
            <h2 class="text-lg font-semibold text-foreground">Plan Card</h2>
            <p class="mt-1 text-sm text-muted-foreground">Pricing plan cards for plan selection screen</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; PlanCard &rbrace; from 'src/app/components/custom/plan-card/plan-card'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="grid gap-4 sm:grid-cols-3">
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Standard (outline CTA)</p>
                  <app-plan-card name="Starter" description="For individuals getting started" quota="Up to 5 users" price="$0" priceSuffix="/month" cta="Get Started" ctaVariant="outline" [features]="starterFeatures" />
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Popular (badge + default CTA)</p>
                  <app-plan-card name="Professional" description="For growing teams" quota="Up to 50 users" price="$29" priceSuffix="/month" cta="Get Started" [popular]="true" [features]="proFeatures" />
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Enterprise (default CTA)</p>
                  <app-plan-card name="Enterprise" description="For large organizations" quota="Unlimited users" price="Custom" cta="Contact Sales" ctaVariant="outline" [features]="enterpriseFeatures" />
                </div>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-card</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-border</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-muted-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-success/10</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-success</code>
              </div>
            </div>
          </section>

          <!-- SOCIAL AUTH BUTTON -->
          <section id="social-auth-button">
            <h2 class="text-lg font-semibold text-foreground">Social Auth Button</h2>
            <p class="mt-1 text-sm text-muted-foreground">OAuth provider buttons</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; SocialAuthButton &rbrace; from 'src/app/components/custom/social-auth-button/social-auth-button'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex max-w-sm flex-col gap-3">
                <app-social-auth-button provider="google" />
                <app-social-auth-button provider="microsoft" />
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-input</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-foreground</code>
              </div>
            </div>
          </section>

          <!-- INVITE LINK COPY -->
          <section id="invite-link-copy">
            <h2 class="text-lg font-semibold text-foreground">Invite Link Copy</h2>
            <p class="mt-1 text-sm text-muted-foreground">Read-only URL field with copy button</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; InviteLinkCopy &rbrace; from 'src/app/components/custom/invite-link-copy/invite-link-copy'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="max-w-md">
                <app-invite-link-copy />
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-input</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-border</code>
              </div>
            </div>
          </section>

          <!-- LEGAL CONSENT ROW -->
          <section id="legal-consent-row">
            <h2 class="text-lg font-semibold text-foreground">Legal Consent Row</h2>
            <p class="mt-1 text-sm text-muted-foreground">Toggle + label for consent items</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; LegalConsentRow &rbrace; from 'src/app/components/custom/legal-consent-row/legal-consent-row'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="max-w-md space-y-4">
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Unchecked</p>
                  <app-legal-consent-row>
                    I agree to CaseLaw's <a class="font-semibold underline">Terms of Service</a>.
                  </app-legal-consent-row>
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Checked</p>
                  <app-legal-consent-row [checked]="true">
                    I agree to CaseLaw's <a class="font-semibold underline">Terms of Service</a>.
                  </app-legal-consent-row>
                </div>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-success</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-muted-foreground</code>
              </div>
            </div>
          </section>

          <!-- MULTI TAG INPUT -->
          <section id="multi-tag-input">
            <h2 class="text-lg font-semibold text-foreground">Multi Tag Input</h2>
            <p class="mt-1 text-sm text-muted-foreground">Email tag input for collaborator invites</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; MultiTagInput &rbrace; from 'src/app/components/custom/multi-tag-input/multi-tag-input'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="max-w-md space-y-4">
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Empty (placeholder)</p>
                  <app-multi-tag-input placeholder="example@email.com" />
                </div>
                <div>
                  <p class="mb-2 text-xs font-medium text-muted-foreground">Filled (3 tags)</p>
                  <app-multi-tag-input [tags]="sampleTags" />
                </div>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">border-input</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-secondary</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">text-muted-foreground</code>
              </div>
            </div>
          </section>

          <!-- PROGRESS STEPS -->
          <section id="progress-steps">
            <h2 class="text-lg font-semibold text-foreground">Progress Steps</h2>
            <p class="mt-1 text-sm text-muted-foreground">Step indicator dots for modal flows</p>
            <p class="mt-0.5 font-mono text-xs text-muted-foreground/70">import &lbrace; ProgressSteps &rbrace; from 'src/app/components/custom/progress-steps/progress-steps'</p>
            <div class="mt-4 rounded-xl border border-border bg-card p-6">
              <div class="flex flex-wrap items-center gap-8">
                @for (step of [1, 2, 3, 4]; track step) {
                  <div class="flex flex-col items-start gap-2">
                    <p class="text-xs font-medium text-muted-foreground">Step {{ step }}/4</p>
                    <app-progress-steps [totalSteps]="4" [currentStep]="step" />
                  </div>
                }
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Tokens</span>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-foreground</code>
                <code class="rounded bg-muted px-1.5 py-0.5 text-[10px]">bg-border</code>
              </div>
            </div>
          </section>


          <!-- ══════════════════════════════════════════ -->
          <!-- ENGINEERING HANDOFF NOTES                 -->
          <!-- ══════════════════════════════════════════ -->

          <section id="handoff" class="border-t border-border pt-12">
            <h2 class="text-xl font-semibold text-foreground">Engineering Handoff Notes</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              All components above are static, visual-only design specs. Below are the key changes needed when wiring up real behavior.
            </p>

            <div class="mt-6 space-y-4">
              <!-- ModalShell → HlmDialog -->
              <div class="rounded-xl border border-border bg-card p-6">
                <h3 class="text-sm font-semibold text-foreground">ModalShell → HlmDialog</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  <code class="rounded bg-muted px-1 py-0.5 text-xs">app-modal-shell</code> renders the modal permanently open with no state management.
                  Replace with spartan's dialog system for open/close, focus trapping, escape-to-close, and overlay click-to-dismiss.
                </p>
                <div class="mt-4 overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-border text-left">
                        <th class="pb-2 pr-4 font-medium text-muted-foreground">Design spec</th>
                        <th class="pb-2 font-medium text-muted-foreground">Production replacement</th>
                      </tr>
                    </thead>
                    <tbody class="text-foreground">
                      <tr class="border-b border-border/50">
                        <td class="py-2 pr-4"><code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;app-modal-shell&gt;</code></td>
                        <td class="py-2"><code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;hlm-dialog&gt;</code> + <code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;hlm-dialog-content&gt;</code></td>
                      </tr>
                      <tr class="border-b border-border/50">
                        <td class="py-2 pr-4"><code class="rounded bg-muted px-1 py-0.5 text-xs">bg-black/50</code> backdrop</td>
                        <td class="py-2"><code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;hlm-dialog-overlay&gt;</code> (automatic)</td>
                      </tr>
                      <tr class="border-b border-border/50">
                        <td class="py-2 pr-4">Heading <code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;h2&gt;</code></td>
                        <td class="py-2"><code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;hlm-dialog-header&gt;</code> + <code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;hlm-dialog-title&gt;</code></td>
                      </tr>
                      <tr class="border-b border-border/50">
                        <td class="py-2 pr-4"><code class="rounded bg-muted px-1 py-0.5 text-xs">[footer]</code> slot</td>
                        <td class="py-2"><code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;hlm-dialog-footer&gt;</code></td>
                      </tr>
                      <tr>
                        <td class="py-2 pr-4"><code class="rounded bg-muted px-1 py-0.5 text-xs">app-progress-steps</code></td>
                        <td class="py-2">Keep as-is inside dialog content</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-3 text-xs text-muted-foreground">
                  Brain: <code class="rounded bg-muted px-1 py-0.5">BrnDialog</code>, <code class="rounded bg-muted px-1 py-0.5">BrnDialogTrigger</code>, <code class="rounded bg-muted px-1 py-0.5">BrnDialogRef</code> from <code class="rounded bg-muted px-1 py-0.5">&#64;spartan-ng/brain/dialog</code>.
                  Helm already scaffolded at <code class="rounded bg-muted px-1 py-0.5">src/app/components/helm/dialog/</code>.
                </p>
              </div>

              <!-- Select -->
              <div class="rounded-xl border border-border bg-card p-6">
                <h3 class="text-sm font-semibold text-foreground">Select Dropdowns → BrnSelect + HlmSelect</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  Replace static <code class="rounded bg-muted px-1 py-0.5 text-xs">&lt;div&gt;</code> selects with <code class="rounded bg-muted px-1 py-0.5 text-xs">brn-select</code> + <code class="rounded bg-muted px-1 py-0.5 text-xs">hlm-select-*</code>.
                  Affected: Firm Details (Country, Firm size), Student Details (Graduation date), Choose Plan (Currency).
                </p>
              </div>

              <!-- MultiTagInput -->
              <div class="rounded-xl border border-border bg-card p-6">
                <h3 class="text-sm font-semibold text-foreground">MultiTagInput → Reactive Form Control</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  Wire up as <code class="rounded bg-muted px-1 py-0.5 text-xs">ControlValueAccessor</code> — handle Enter/comma to add tags, dismiss to remove, email validation.
                </p>
              </div>

              <!-- InviteLinkCopy -->
              <div class="rounded-xl border border-border bg-card p-6">
                <h3 class="text-sm font-semibold text-foreground">InviteLinkCopy → Clipboard API</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  Wire <code class="rounded bg-muted px-1 py-0.5 text-xs">navigator.clipboard.writeText()</code> on click. Swap label to "Copied!" with timeout. URL from API.
                </p>
              </div>

              <!-- LegalConsentRow -->
              <div class="rounded-xl border border-border bg-card p-6">
                <h3 class="text-sm font-semibold text-foreground">LegalConsentRow → Form Binding</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  Bind <code class="rounded bg-muted px-1 py-0.5 text-xs">hlm-switch</code> via <code class="rounded bg-muted px-1 py-0.5 text-xs">BrnSwitch</code> changed output.
                  Block "Accept" until required consent is checked.
                </p>
              </div>

              <!-- SocialAuthButton -->
              <div class="rounded-xl border border-border bg-card p-6">
                <h3 class="text-sm font-semibold text-foreground">SocialAuthButton → OAuth Redirect</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  Wire click handlers for Google/Microsoft OAuth flows. Add loading state and error handling for the redirect.
                </p>
              </div>

              <!-- Token Confidence -->
              <div class="rounded-xl border border-border bg-muted/50 p-6">
                <h3 class="text-sm font-semibold text-foreground">Token Confidence Levels</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                  ~27 tokens are tagged <code class="rounded bg-muted px-1 py-0.5 text-xs">Estimated</code> and
                  6 are <code class="rounded bg-muted px-1 py-0.5 text-xs">Needs verification</code>.
                  Highest priority: <code class="rounded bg-muted px-1 py-0.5 text-xs">--success</code> exact OKLCH value — verify against Figma before shipping.
                </p>
                <p class="mt-2 text-xs text-muted-foreground">
                  Full confidence audit in <code class="rounded bg-muted px-1 py-0.5">docs/tokens/colors.md</code>,
                  <code class="rounded bg-muted px-1 py-0.5">docs/tokens/typography.md</code>, and
                  <code class="rounded bg-muted px-1 py-0.5">docs/tokens/spacing-radii-shadows.md</code>.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  `,
})
export class ComponentsGallery {
  // ── Sidebar navigation ──
  readonly sidebarTokens = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'radius', label: 'Border Radius' },
    { id: 'shadows', label: 'Shadows' },
  ];

  readonly sidebarSpartan = [
    { id: 'button', label: 'Button' },
    { id: 'input', label: 'Input' },
    { id: 'select', label: 'Select' },
    { id: 'toggle-switch', label: 'Toggle Switch' },
    { id: 'badge', label: 'Badge' },
    { id: 'tag', label: 'Tag' },
  ];

  readonly sidebarCustom = [
    { id: 'onboarding-shell', label: 'Onboarding Shell' },
    { id: 'modal-shell', label: 'Modal Shell' },
    { id: 'type-selection-card', label: 'Type Selection Card' },
    { id: 'plan-card', label: 'Plan Card' },
    { id: 'social-auth-button', label: 'Social Auth Button' },
    { id: 'invite-link-copy', label: 'Invite Link Copy' },
    { id: 'legal-consent-row', label: 'Legal Consent Row' },
    { id: 'multi-tag-input', label: 'Multi Tag Input' },
    { id: 'progress-steps', label: 'Progress Steps' },
  ];

  readonly sidebarScreens = [
    { path: '/compare/type-selection', label: 'Type Selection' },
    { path: '/compare/persona', label: 'Persona' },
    { path: '/compare/create-account', label: 'Create Account' },
    { path: '/compare/details', label: 'Details' },
    { path: '/compare/collaborators', label: 'Collaborators' },
    { path: '/compare/terms-privacy', label: 'Terms & Privacy' },
    { path: '/compare/choose-plan', label: 'Plan Selection' },
  ];

  // ── Stats ──
  readonly stats = [
    { value: '13', label: 'spartan helm components' },
    { value: '9', label: 'custom compositions' },
    { value: '17', label: 'screen components' },
    { value: '39', label: 'total patterns' },
  ];

  // ── Color tokens ──
  readonly neutralColors = [
    { name: 'white', hex: '#ffffff', value: '#ffffff' },
    { name: 'neutral-50', hex: '#f8f8f8', value: '#f8f8f8' },
    { name: 'neutral-100', hex: '#f2f2f2', value: '#f2f2f2' },
    { name: 'neutral-200', hex: '#e5e5e5', value: '#e5e5e5' },
    { name: 'neutral-300', hex: '#d4d4d4', value: '#d4d4d4' },
    { name: 'neutral-400', hex: '#a3a3a3', value: '#a3a3a3' },
    { name: 'neutral-500', hex: '#737373', value: '#737373' },
    { name: 'neutral-600', hex: '#525252', value: '#525252' },
    { name: 'neutral-700', hex: '#404040', value: '#404040' },
    { name: 'neutral-750', hex: '#333333', value: '#333333' },
    { name: 'neutral-800', hex: '#262626', value: '#262626' },
    { name: 'neutral-900', hex: '#171717', value: '#171717' },
    { name: 'neutral-950', hex: '#0a0a0a', value: '#0a0a0a' },
  ];

  readonly semanticColors = [
    { name: 'success', hex: '#16a34a', value: '#16a34a' },
    { name: 'destructive', hex: '#dc2626', value: '#dc2626' },
  ];

  readonly variableMap = [
    { variable: '--background', oklch: 'oklch(0.985 0 0)', hex: '#f8f8f8', twClass: 'bg-background', usage: 'Page background' },
    { variable: '--foreground', oklch: 'oklch(0.145 0 0)', hex: '#0a0a0a', twClass: 'text-foreground', usage: 'Primary text, headings' },
    { variable: '--card', oklch: 'oklch(1 0 0)', hex: '#ffffff', twClass: 'bg-card', usage: 'Card & modal backgrounds' },
    { variable: '--primary', oklch: 'oklch(0.145 0 0)', hex: '#0a0a0a', twClass: 'bg-primary', usage: 'Dark button background' },
    { variable: '--primary-foreground', oklch: 'oklch(1 0 0)', hex: '#ffffff', twClass: 'text-primary-foreground', usage: 'White text on dark button' },
    { variable: '--muted-foreground', oklch: 'oklch(0.525 0 0)', hex: '#737373', twClass: 'text-muted-foreground', usage: 'Subtitles, helper text' },
    { variable: '--border', oklch: 'oklch(0.922 0 0)', hex: '#e5e5e5', twClass: 'border-border', usage: 'Default borders' },
    { variable: '--ring', oklch: 'oklch(0.205 0 0)', hex: '#262626', twClass: 'ring-ring', usage: 'Focus ring, selected card' },
    { variable: '--success', oklch: 'oklch(0.6 0.2 145)', hex: '#16a34a', twClass: 'bg-success', usage: 'Toggle active, popular badge' },
    { variable: '--destructive', oklch: 'oklch(0.577 0.245 27)', hex: '#dc2626', twClass: 'bg-destructive', usage: 'Error/destructive states' },
  ];

  // ── Typography ──
  readonly typographyScale = [
    { label: 'Are you an individual or a group?', class: 'text-3xl', size: '30px', weight: 'font-kalice italic', renderClass: 'text-3xl font-kalice italic' },
    { label: 'Law firm details', class: 'text-2xl', size: '24px', weight: 'font-semibold', renderClass: 'text-2xl font-semibold' },
    { label: 'CaseLaw', class: 'text-xl', size: '20px', weight: 'font-kalice italic', renderClass: 'text-xl font-kalice italic' },
    { label: 'Professional', class: 'text-lg', size: '18px', weight: 'font-semibold', renderClass: 'text-lg font-semibold' },
    { label: 'Individual', class: 'text-base', size: '16px', weight: 'font-semibold', renderClass: 'text-base font-semibold' },
    { label: 'Continue →', class: 'text-sm', size: '14px', weight: 'font-semibold', renderClass: 'text-sm font-semibold' },
    { label: 'For solo practitioners and students', class: 'text-sm', size: '14px', weight: 'font-normal', renderClass: 'text-sm font-normal' },
    { label: 'Already have an account? Log in', class: 'text-xs', size: '12px', weight: 'font-normal', renderClass: 'text-xs font-normal' },
    { label: 'Micro labels', class: 'text-2xs', size: '10px', weight: 'font-normal', renderClass: 'text-[10px] font-normal' },
  ];

  // ── Kalice Specimens ──
  readonly kaliceSpecimens = [
    { label: 'Kalice Italic 14', twClass: 'text-sm font-kalice italic', size: '14px', style: 'italic', renderClass: 'text-sm font-kalice italic' },
    { label: 'Kalice Italic 16', twClass: 'text-base font-kalice italic', size: '16px', style: 'italic', renderClass: 'text-base font-kalice italic' },
    { label: 'Kalice 16', twClass: 'text-base font-kalice', size: '16px', style: 'normal', renderClass: 'text-base font-kalice' },
    { label: 'Kalice Title', twClass: 'text-2xl font-kalice', size: '24px', style: 'normal', renderClass: 'text-2xl font-kalice' },
  ];

  // ── Spacing ──
  readonly spacingScale = [
    { name: 'space-1', px: 4 },
    { name: 'space-2', px: 8 },
    { name: 'space-3', px: 12 },
    { name: 'space-4', px: 16 },
    { name: 'space-5', px: 20 },
    { name: 'space-6', px: 24 },
    { name: 'space-8', px: 32 },
    { name: 'space-10', px: 40 },
    { name: 'space-12', px: 48 },
  ];

  // ── Border Radius ──
  readonly radiusScale = [
    { name: 'rounded-sm', value: '4px' },
    { name: 'rounded-md', value: '6px' },
    { name: 'rounded-lg', value: '12px' },
    { name: 'rounded-xl', value: '16px' },
    { name: 'rounded-full', value: '9999px' },
  ];

  // ── Shadows ──
  readonly shadowScale = [
    { name: 'shadow-xs', class: 'shadow-xs' },
    { name: 'shadow-sm', class: 'shadow-sm' },
    { name: 'shadow-md', class: 'shadow-md' },
    { name: 'shadow-lg', class: 'shadow-lg' },
  ];

  // ── Component data ──
  readonly sampleTags = ['john@lawfirm.com', 'jane@lawfirm.com', 'lisa@lawfirm.com'];

  readonly starterFeatures = [
    'Basic case management',
    'Document storage (1 GB)',
    'Email support',
  ];

  readonly proFeatures = [
    'Everything in Starter',
    'Advanced analytics',
    'Document storage (50 GB)',
    'Priority support',
  ];

  readonly enterpriseFeatures = [
    'Everything in Professional',
    'Custom integrations',
    'Unlimited storage',
    'Dedicated account manager',
    'SLA guarantee',
  ];
}
