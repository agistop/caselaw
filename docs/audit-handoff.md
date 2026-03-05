# Handoff Audit Report

**Date:** 2026-03-04
**Scope:** Custom components, spartan mapping, token docs, component gallery

---

## 1. Structural Gaps

### Components NOT showcased in the gallery

| Component | In Gallery? | Notes |
|---|---|---|
| `onboarding-shell` | Partial | Links to live screens only — no inline preview or prop table |
| `modal-shell` | Partial | Renders a hand-drawn skeleton, not `<app-modal-shell>`. Skeleton layout doesn't match actual slot structure (separator position) |

All other 7 custom components (`type-selection-card`, `progress-steps`, `social-auth-button`, `multi-tag-input`, `legal-consent-row`, `invite-link-copy`, `plan-card`) are showcased with live instances.

### Components used in screens but NOT in spartan-mapping.md

None — `spartan-mapping.md` accurately lists all 9 custom compositions and all helm components used across both flows.

### Entries in spartan-mapping.md with no built component

None — all mapped components exist in source.

### Gallery sidebar coverage

- Sidebar Screens nav lists **only 7 law-firm screens**, skipping `persona-closed` and `collaborators-filled`.
- **Zero student screens** in sidebar. The `/screens` index route covers all 17, but the gallery itself under-represents the student flow.

### Gallery data vs screen implementation

- `LfChoosePlan` passes `ctaVariant="default"` (dark fill) for Enterprise; the gallery shows Enterprise with `outline` CTA. Minor inconsistency.

---

## 2. Token Gaps

### Tokens marked "Needs verification"

| Token | Source File | Issue |
|---|---|---|
| `--success` / `color-success` | colors.md, CLAUDE.md | `oklch(0.6 0.2 145)` / `~#16a34a` — needs Figma confirmation |
| `font-sans` identity | typography.md | Inter? System? Custom? — unresolved |
| `font-medium` (500) usage | typography.md | Is 500 a distinct visible step from 400/600? |
| `text-2xs` (10px) | typography.md | Not observed in any onboarding screen |
| Line heights (all) | typography.md | Using Tailwind defaults; never verified against designs |
| `rounded-sm` | spacing-radii-shadows.md | Not clearly observed in screenshots |

### Tokens marked "Estimated" (no Figma source)

| Category | Count | Details |
|---|---|---|
| Spacing | 8 | All values (`space-1` through `space-12`) |
| Border radius | 3 | `rounded-md`, `rounded-lg`, `rounded-xl` |
| Shadows | 3 | `shadow-sm`, `shadow-md`, `shadow-lg` |
| Border widths | 2 | `border` (1px), `border-2` (2px) |
| Color hex approximations | ~10 | All `~` prefixed hex values in colors.md |
| Font weight | 1 | `font-medium` (500) |
| **Total estimated** | **~27** | |

### Hardcoded values in custom components

| Component | Value | Verdict |
|---|---|---|
| `social-auth-button` | `#4285F4`, `#34A853`, etc. (Google/Microsoft brand colors) | Intentional — brand identity, not design tokens |
| `modal-shell` | `bg-black/50` (backdrop) | Intentional — per CLAUDE.md resolved decision |

No unintentional hardcoded colors or spacing values found. All components use spartan CSS variables correctly.

---

## 3. Clarity Gaps (Engineer Readiness)

### Missing spartan import paths in gallery

The gallery shows component names and live instances but does **not** display import paths for any custom composition. An engineer would need to search the codebase to find e.g. `import { PlanCard } from '@components/custom/plan-card/plan-card'`.

The Handoff section (6 cards) does reference `HlmDialog`/`BrnDialog` import paths for the modal-shell migration, but no other composition lists its import.

### Missing visible token annotations

The Design Tokens section renders color swatches, type specimens, spacing bars, etc. with their **CSS variable names** (e.g., `--background`, `text-sm`). This is good.

However, the **component sections** do not annotate which tokens are being used. For example, the `plan-card` section shows three cards but doesn't call out that the "Most Popular" badge uses `bg-success/10 text-success border-success/20`. An engineer must inspect the source to discover token usage per component.

### Components with unclear composition intent

| Component | Issue |
|---|---|
| `onboarding-shell` | No JSDoc. Purpose (full-page wrapper vs. reusable layout) unclear from gallery alone |
| `type-selection-card` | No JSDoc. Gallery shows 4 states but doesn't explain the `selected` input binding pattern |
| `multi-tag-input` | No JSDoc. Static spec — not obvious that it carries no keyboard/paste behavior |
| `progress-steps` | No JSDoc. Unclear whether `currentStep` is 0-indexed or 1-indexed without reading source |

### Production vs. exploration status

Only `modal-shell` (via its JSDoc) explicitly states it is a **design spec** component that should be replaced with `HlmDialog` in production. The gallery Handoff section covers 6 migration items, but 3 custom components (`onboarding-shell`, `type-selection-card`, `progress-steps`) have **no indication** whether they are production-ready or exploration-only.

---

## 4. Summary Scorecard

| Area | Total | Complete | Gaps | Coverage |
|---|---|---|---|---|
| Custom components built | 9 | 9 | 0 | 100% |
| Custom components in gallery | 9 | 7 fully, 2 partial | 2 | 78% |
| Spartan mapping entries | 20 (11 helm + 9 custom) | 20 | 0 | 100% |
| Token verifications — Exact | ~40 tokens total | ~4 | ~36 | ~10% |
| Token verifications — Needs verification | — | — | 6 | — |
| Token verifications — Estimated | — | — | ~27 | — |
| Gallery entries with import paths | 9 custom + 6 helm | 0 | 15 | 0% |
| Gallery entries with token annotations | 15 | 0 | 15 | 0% |
| Components with JSDoc | 9 | 1 (`modal-shell`) | 8 | 11% |
| Gallery sidebar screen links | 17 screens | 7 | 10 | 41% |

---

## 5. Priority Recommendations

### 1. Add JSDoc to all 8 undocumented custom components

**Impact:** High — engineers need to know what each component is, what its inputs do, whether it's production-ready or a design-spec placeholder, and what behavior they need to wire up.

Minimum per component:
- One-line purpose
- Input descriptions with types and defaults
- `@status` tag: `design-spec` (static, needs production wiring) or `production-ready`
- For design-spec components: what needs to change for production (like `modal-shell` already does)

### 2. Add import paths and token annotations to gallery entries

**Impact:** High — the gallery is the primary handoff artifact. Without import paths, engineers must grep the codebase. Without token annotations on component demos, the connection between the Design Tokens section and the component implementations is implicit.

Suggested format per gallery section:
```
Import: import { PlanCard } from '../components/custom/plan-card/plan-card';
Tokens: bg-card, border-border, text-success, bg-success/10
```

### 3. Complete gallery sidebar with all 17 screens + student flow

**Impact:** Medium — the `/screens` index route exists as a fallback, but the gallery sidebar is the primary navigation. Missing 10 of 17 screen links (including the entire student flow) makes it look like only half the work is done.

---

*Generated by audit script. Source files: `src/app/components/custom/`, `src/app/screens/`, `docs/components/spartan-mapping.md`, `src/app/screens/components-gallery/`.*
