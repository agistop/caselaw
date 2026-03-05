# Onboarding Flow — Student

## Diagram Reference

> **Official flow diagram:** [`onboarding-flow-diagram.pdf`](../onboarding-flow-diagram.pdf)
> **Top-level overview:** [`docs/flows/onboarding/index.md`](../index.md)

## Overview

8-screen flow. Structurally identical to the Law Firm flow. Differences are limited to:
- Copy (field labels, placeholders, helper text)
- Field set in the Details Modal (graduation date replaces website; student code added)
- Quota line in plan cards (searches instead of user seats)
- Persona dropdown options

All UI components are shared. This flow is a content variant, not a structural variant.

The official flow diagram reveals additional shared steps not yet implemented — email verification, Stripe checkout, and a homepage exit point. These are documented below as gaps.

---

## Screen Inventory

| # | File | Screen name | Delta from Law Firm |
|---|------|-------------|---------------------|
| 0 | `Student-0.png` | Type Selection — **Individual selected** | `type-selection-card` Individual card in `selected` state (dark border confirmed) |
| 1 | `Student-1.png` | Persona — dropdown open, "Student" highlighted | Different option list; "Student" item in hover state |
| 2 | `Student-2.png` | Create Account | Copy differs: university email placeholder `@university.com` |
| 3 | `Student-3.png` | Student Details Modal | Different fields: Account name, home address, **When do you graduate?** (date-select), **student code** (input + trailing icon) |
| 4 | `Student-4.png` | Add Collaborators — empty | Copy differs: "classmates" instead of "co-workers" |
| 5 | `Student-5.png` | Add Collaborators — filled | Tags show `@college.com` addresses |
| 6 | `Student-6.png` | Terms & Privacy | Identical to Law Firm |
| 7 | `Student-7.png` | Choose Your Plan | Quota line: Searches (100 / 1k / 10k / Unlimited) instead of user seats |

---

## Flow Sequence

```
[0] Type Selection → Individual card SELECTED
    ↓ Continue
[1] Persona — dropdown open → selects "Student"
    ↓ Continue
[2] Create Account
    ↓ Continue (or OAuth)
    ↓ ❌ Validation failure → error states (NOT IMPLEMENTED — see Open Flags)
    ↓ ✅ Success
[*] Email Verification (NOT IMPLEMENTED)
    ↓ verification email sent → user clicks link → returns to platform
[3] Student Details Modal (step 1/4)
    ↓ Continue
[4] Add Collaborators — empty (step 2/4)
    ↓ user adds classmate emails
[5] Add Collaborators — filled (step 2/4)
    ↓ Continue
[6] Terms & Privacy (step 3/4)
    ↓ Accept
[7] Choose Your Plan (step 4/4)
    ↓ Select plan → "finish"
[*] Stripe Checkout Page (NOT IMPLEMENTED)
    ↓ user enters payment info → "pay & subscribe"
[*] CaseLaw Homepage (flow exit point)
```

> Steps marked `[*]` are documented in the official flow diagram but have no implemented screens yet.

---

## Component Callouts Per Screen

### Screen 0 — Type Selection (Individual selected)

- `onboarding-shell` — identical to law firm
- `type-selection-card` — Individual: `variant="selected"` (dark border, estimated `border-2 border-neutral-800`); Group: `variant="unselected"`
- `button` — `variant="primary"` Continue (active, because a selection has been made)

**New state confirmed:** `type-selection-card` `selected` state with dark border

---

### Screen 1 — Persona Dropdown Open

- `onboarding-shell`
- `select` — open panel; different option list from law firm (includes "Student" option); "Student" item in hover/highlighted state (`bg-neutral-100` estimated)
- `button` — Go back + Continue

**Confirms:** hover state on `option-item` is a background highlight, no checkmark icon

---

### Screen 2 — Create Account

- Identical composition to Law Firm Screen 3
- Placeholder text: `@university.com` email
- All components shared

---

### Screen 3 — Student Details Modal

- `modal-shell` — progress-steps header; step 1 `active`
- `input` — Account name (`modifier="full-width"`)
- `input` — Home address (`modifier="full-width"`)
- `select` (date-select) — "When do you graduate?" — placeholder "Select date"; chevron icon; **flagged: may be `select` variant or separate `date-select` component**
- `input` — Student code; `variant="with-trailing-icon"`; trailing icon unclear at resolution — **needs verification (info icon? scan/QR icon?)**

**New patterns introduced:** `input` `with-trailing-icon` variant, `date-select` (pending merge decision)

---

### Screens 4 & 5 — Add Collaborators

- Identical composition to Law Firm Screens 5 & 6
- Copy: "Add your classmates" / "classmate emails"
- Tags in filled state: `@college.com` addresses

---

### Screen 6 — Terms & Privacy

- Identical to Law Firm Screen 7. No delta.

---

### Screen 7 — Choose Your Plan

- Identical composition to Law Firm Screen 8
- `plan-card` quota slot content differs: "100 Searches / 1,000 Searches / 10,000 Searches / Unlimited Searches"
- All other elements identical

---

## Key Findings from Student Flow

1. **`type-selection-card` selected state** — dark border confirmed. Estimated: `border-2 border-neutral-800`. All other card properties unchanged.
2. **`input` trailing icon** — present on student code field. Icon identity unclear. Flagged for verification.
3. **`date-select`** — select-trigger style UI. Pending decision: merge into `select` `variant="date"` or keep as `date-select` component.
4. **`plan-card` quota slot** — confirmed generic content slot; no structural variant needed.
5. **Option hover** — background highlight only (`bg-neutral-100`), no indicator icon.

---

## Implementation Reference

All screens are implemented as standalone Angular components using spartan.ng helm directives + custom compositions. See `docs/components/spartan-mapping.md` for the full component mapping.

| Screen | Angular Component | Route |
|--------|-------------------|-------|
| 0 — Type Selection | `StTypeSelection` | `/student/0-type-selection` |
| 1 — Persona Open | `StPersonaOpen` | `/student/1-persona-open` |
| 2 — Create Account | `StCreateAccount` | `/student/2-create-account` |
| 3 — Student Details | `StStudentDetails` | `/student/3-student-details` |
| 4 — Collaborators Empty | `StCollaboratorsEmpty` | `/student/4-collaborators-empty` |
| 5 — Collaborators Filled | `StCollaboratorsFilled` | `/student/5-collaborators-filled` |
| 6 — Terms & Privacy | `StTermsPrivacy` | `/student/6-terms-privacy` |
| 7 — Choose Plan | `StChoosePlan` | `/student/7-choose-plan` |

Source files: `src/app/screens/onboarding/student/`

---

## Open Flags

### Existing
- [ ] Student code field trailing icon — what icon? (info, scan, QR, eye?) Needs design clarification
- [ ] `date-select` — separate component or `select` variant? Needs interaction spec (calendar popover vs. scrollable list)
- [ ] Graduation date options — are these year values, semester/year strings, or a date picker?
- [ ] Student plan quotas (100/1k/10k/Unlimited) — confirm values with product

### From Flow Diagram (gaps vs current implementation)
- [ ] **Account creation error states** — diagram shows validation failure branch with "??" error messages (invalid email, password requirements). No error-state screens exist. Need: error message copy, inline vs toast display, retry behavior.
- [ ] **Email verification sub-flow** — diagram shows: verification sent → user clicks link → returns to platform. Need: "check your email" screen design, resend option, expiry behavior, return-to-app screen.
- [ ] **Stripe checkout page** — diagram shows a separate checkout page after plan selection where user enters payment info. Need: Stripe-hosted vs embedded, page design, what CaseLaw chrome surrounds it.
- [ ] **Homepage exit** — diagram ends at "CaseLaw Homepage displays". Current flow ends at choose-plan with no defined exit transition.
