# Onboarding Flow — Law Firm

## Diagram Reference

> **Official flow diagram:** [`onboarding-flow-diagram.pdf`](../onboarding-flow-diagram.pdf)
> **Top-level overview:** [`docs/flows/onboarding/index.md`](../index.md)

## Overview

9-screen flow covering account type selection through plan selection. The official flow diagram reveals additional steps beyond what is currently implemented — email verification, conditional billing address, Stripe checkout, and a homepage exit point. These are documented below as gaps.

---

## Screen Inventory

| # | File | Screen name | Description |
|---|------|-------------|-------------|
| 0 | `Law Firm-0.png` | Type Selection — unselected | Full-page shell; two large selection cards for Individual and Group; neither selected |
| 1 | `Law Firm-1.png` | Persona — dropdown closed | Select trigger showing placeholder; Group category options not yet visible |
| 2 | `Law Firm-2.png` | Persona — dropdown open | Dropdown panel open; options listed; "Law firm" (or similar) highlighted |
| 3 | `Law Firm-3.png` | Create Account | Email + password inputs; Continue button; Google and Microsoft OAuth buttons; legal link text |
| 4 | `Law Firm-4.png` | Firm Details Modal | In-app modal; 4-step progress indicator; firm name, address, phone, website fields; Add member link |
| 5 | `Law Firm-5.png` | Add Collaborators — empty | Modal; multi-tag-input empty; two toggle switches; invite-link-copy block |
| 6 | `Law Firm-6.png` | Add Collaborators — filled | Same modal; tags visible in multi-tag-input (email addresses) |
| 7 | `Law Firm-7.png` | Terms & Privacy | Modal; scrollable body with ToS text; two legal-consent-row toggles; Accept button |
| 8 | `Law Firm-8.png` | Choose Your Plan | Full-page layout; 4 plan cards; billing toggle (monthly/annual); currency selector; progress-steps |

---

## Flow Sequence

```
[0] Type Selection (unselected)
    ↓ user picks "Group" card
[1] Persona — dropdown closed
    ↓ user opens dropdown
[2] Persona — dropdown open → selects "Law firm"
    ↓ Continue
[3] Create Account
    ↓ Continue (or OAuth)
    ↓ ❌ Validation failure → error states (NOT IMPLEMENTED — see Open Flags)
    ↓ ✅ Success
[*] Email Verification (NOT IMPLEMENTED)
    ↓ verification email sent → user clicks link → returns to platform
[4] Firm Details Modal (step 1/4)
    ↓ Continue
[?] Firm Details — page 2? (UNCLEAR — see Open Flags)
    ↓ Continue
[5] Add Collaborators — empty (step 2/4)
    ↓ user adds emails
[6] Add Collaborators — filled (step 2/4)
    ↓ Continue
[*] Separate Billing Address (NOT IMPLEMENTED — conditional)
    ↓ if billing address differs from firm address
[7] Terms & Privacy (step 3/4)
    ↓ Accept
[8] Choose Your Plan (step 4/4)
    ↓ Select plan → "finish"
[*] Stripe Checkout Page (NOT IMPLEMENTED)
    ↓ user enters payment info → "pay & subscribe"
[*] CaseLaw Homepage (flow exit point)
```

> Steps marked `[*]` are documented in the official flow diagram but have no implemented screens yet.
> Step marked `[?]` needs clarification — see Open Flags.

---

## Component Callouts Per Screen

### Screen 0 — Type Selection (unselected)

- `onboarding-shell` — full-page wrapper: CaseLaw wordmark top-center, dashed grid background, footer login link
- `type-selection-card` × 2 — `variant="unselected"` on both; Individual card (person illustration), Group card (group illustration)
- `button` — `variant="primary"` Continue (disabled/inactive because no selection made)

**New patterns introduced:** `onboarding-shell`, `type-selection-card`

---

### Screen 1 — Persona Dropdown Closed

- `onboarding-shell` — same wrapper
- `select` — closed trigger; placeholder text visible; chevron icon right-aligned
- `button` — `variant="primary"` Continue; `variant="ghost"` Go back

**New patterns introduced:** `select` (closed state)

---

### Screen 2 — Persona Dropdown Open

- `onboarding-shell` — same wrapper
- `select` — open panel; `option-item` list visible; one item in `hover` / highlighted state (background highlight, no checkmark)
- `button` — same nav buttons

**New patterns introduced:** `select` (open state), `option-item` hover

---

### Screen 3 — Create Account

- `onboarding-shell` — same wrapper
- `input` × 2 — email, password; `variant="default"`, `modifier="full-width"`
- `button` — `variant="primary"` `modifier="full-width"` Continue
- `social-auth-button` × 2 — Google, Microsoft
- Legal text — small `text-xs` copy with inline links (Terms of Service, Privacy Policy); not a component, just a text node

**New patterns introduced:** `input`, `social-auth-button`

---

### Screen 4 — Firm Details Modal

- `modal-shell` — in-app dialog overlay; progress-steps header; Go back + Continue footer
- `progress-steps` — 4 dots; step 1 `active`, steps 2-4 `pending`
- `input` × 4 (approx) — Firm name, Address, Phone, Website; `modifier="full-width"`
- `select` — Country/region selector (estimated)
- Additive link — "+ Add another member" style text link; not a separate component

**New patterns introduced:** `modal-shell` (static modal wrapper), `progress-steps`

---

### Screen 5 — Add Collaborators (empty)

- `modal-shell` — progress-steps header; step 2 `active`
- `multi-tag-input` — `state="empty"`; placeholder text; no tags
- `toggle-switch` × 2 — "Notify via email" and a second option; both in `off` state (estimated)
- `invite-link-copy` — read-only URL input + Copy button

**New patterns introduced:** `multi-tag-input`, `toggle-switch`, `invite-link-copy`

---

### Screen 6 — Add Collaborators (filled)

- Same composition as Screen 5
- `multi-tag-input` — `state="filled"`; email address tags visible
- `tag` × N — `variant="dismissible"`; each shows an email address with × button

**New patterns introduced:** `tag` (dismissible)

---

### Screen 7 — Terms & Privacy

- `modal-shell` — progress-steps header; step 3 `active`; scrollable content body
- `legal-consent-row` × 2 — Toggle + label text; first: ToS acceptance, second: marketing opt-in
- `button` — `variant="primary"` Accept (full-width inside modal footer)

**New patterns introduced:** `legal-consent-row`

---

### Screen 8 — Choose Your Plan

- Full-page layout (not a modal); no `onboarding-shell` wrapper visible — standalone plan page
- `progress-steps` — step 4 `active`; displayed in page header area
- `select` — currency selector (USD, GBP, EUR, etc.)
- `toggle-switch` — billing cycle: Monthly / Annual
- `plan-card` × 4 — Free, Starter, Professional, Enterprise tiers; one card marked "Most Popular"
- `badge` — "Most Popular" green pill on Professional card
- `button` — `variant="primary"` on highlighted card; `variant="outlined"` on others (estimated)

**New patterns introduced:** `plan-card`, `badge`

---

## Implementation Reference

All screens are implemented as standalone Angular components using spartan.ng helm directives + custom compositions. See `docs/components/spartan-mapping.md` for the full component mapping.

| Screen | Angular Component | Route |
|--------|-------------------|-------|
| 0 — Type Selection | `LfTypeSelection` | `/law-firm/0-type-selection` |
| 1 — Persona Closed | `LfPersonaClosed` | `/law-firm/1-persona-closed` |
| 2 — Persona Open | `LfPersonaOpen` | `/law-firm/2-persona-open` |
| 3 — Create Account | `LfCreateAccount` | `/law-firm/3-create-account` |
| 4 — Firm Details | `LfFirmDetails` | `/law-firm/4-firm-details` |
| 5 — Collaborators Empty | `LfCollaboratorsEmpty` | `/law-firm/5-collaborators-empty` |
| 6 — Collaborators Filled | `LfCollaboratorsFilled` | `/law-firm/6-collaborators-filled` |
| 7 — Terms & Privacy | `LfTermsPrivacy` | `/law-firm/7-terms-privacy` |
| 8 — Choose Plan | `LfChoosePlan` | `/law-firm/8-choose-plan` |

Source files: `src/app/screens/onboarding/law-firm/`

---

## Open Flags

### Existing
- Screen 0: Is the Continue button truly disabled when nothing is selected, or just visually subdued?
- Screen 4: Exact field list for firm details needs verification against product requirements
- Screen 4: Additive "Add member" link — is it a separate component or inline text?
- Screen 8: Plan prices and quotas are placeholder values — confirm with product before implementation
- Screen 8: Currency selector — full list of supported currencies?

### From Flow Diagram (gaps vs current implementation)
- [ ] **Account creation error states** — diagram shows validation failure branch with "??" error messages (invalid email, password requirements). No error-state screens exist. Need: error message copy, inline vs toast display, retry behavior.
- [ ] **Email verification sub-flow** — diagram shows: verification sent → user clicks link → returns to platform. Need: "check your email" screen design, resend option, expiry behavior, return-to-app screen.
- [ ] **Firm Info appears twice** — diagram shows "User inputs Firm Info and clicks continue" twice in sequence. Is this a 2-page form (e.g., basic info then additional details) or a diagram duplication? Affects progress-steps count.
- [ ] **Separate billing address** — diagram shows conditional branch after firm info. Need: trigger condition (checkbox? plan type?), billing address form design, which fields.
- [ ] **Stripe checkout page** — diagram shows a separate checkout page after plan selection where user enters payment info. Need: Stripe-hosted vs embedded, page design, what CaseLaw chrome surrounds it.
- [ ] **Homepage exit** — diagram ends at "CaseLaw Homepage displays". Current flow ends at choose-plan with no defined exit transition.
