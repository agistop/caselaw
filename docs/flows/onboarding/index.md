# Onboarding Flow — Overview

> **Official flow diagram:** [`onboarding-flow-diagram.pdf`](./onboarding-flow-diagram.pdf)
> **Product context:** [`docs/product/product-context.md`](../../product/product-context.md)

---

## Purpose

This document is the single entry point for understanding the complete onboarding architecture. It references the official flow diagram PDF and maps the full branching structure, linking to individual flow docs where they exist.

---

## Entry Point — Returning User Check

```
Start → Onboarding Account Creation
         ↓
      "Have a log in?"
      ├── Yes → ?? (undefined destination — see Open Questions)
      └── No  → proceed to type selection
```

> The "Yes" path is marked "??" in the official diagram. Destination is undefined — likely login page or dashboard redirect.

---

## Branching Structure

### Step 1 — Individual or Group

The user chooses between an Individual account (single person) or a Group account (organization).

### Step 2 — Persona / Category Selection

**Individual** options:
- Student
- Sole Lawyer / Researcher

**Group** options (dropdown):
- Law Firm
- Company
- Student Body
- Other → free-text input: *"which best describes what you do"*

```
Individual or Group?
├── Individual
│   ├── Student ................ ✅ Implemented (8 screens)
│   └── Sole Lawyer / Researcher  📋 Documented only
└── Group
    ├── Law Firm ............... ✅ Implemented (9 screens)
    ├── Company ................ 📋 Documented only
    ├── Student Body ........... ⬜ Not yet documented
    └── Other .................. ⬜ Not yet documented
        └── free-text: "which best describes what you do"
```

---

## Shared Steps (All Branches)

After type/persona selection, all branches follow a common sequence. The official flow diagram defines these steps:

| # | Step | Status | Notes |
|---|------|--------|-------|
| 1 | **Create Account** — email + password or OAuth | ✅ Implemented | Screens exist for Law Firm + Student |
| 2 | **Account Validation** — error states for invalid input | ⬜ Not implemented | Diagram marks error handling with "??" — exact rules undefined |
| 3 | **Email Verification** — verification sent → user clicks link → returns to platform | ⬜ Not implemented | Completely missing from current screens |
| 4 | **Details Form** — branch-specific fields | ✅ Implemented | Firm details (Law Firm), Student details (Student) |
| 5 | **Add Collaborators** — invite teammates | ✅ Implemented | Shared component across branches |
| 6 | **Separate Billing Address** — conditional | ⬜ Not implemented | Diagram shows decision branch; trigger condition unclear |
| 7 | **Terms of Service** — user accepts | ✅ Implemented | Shared component across branches |
| 8 | **Choose Plan** — Stripe integration | ✅ Implemented | Plan selection screen exists |
| 9 | **Stripe Checkout** — payment info entry | ⬜ Not implemented | Separate page after plan selection |
| 10 | **CaseLaw Homepage** — flow exit | ⬜ Not implemented | Diagram's defined exit point |

---

## Flow Index

| Flow | Branch | Screens | Doc | Status |
|------|--------|---------|-----|--------|
| Law Firm | Group → Law Firm | 9 | [`law-firm/index.md`](./law-firm/index.md) | ✅ Implemented |
| Student | Individual → Student | 8 | [`student/index.md`](./student/index.md) | ✅ Implemented |
| Company | Group → Company | — | — | 📋 Documented in product-context only |
| Sole Lawyer / Researcher | Individual → Sole Lawyer | — | — | 📋 Documented in product-context only |
| Student Body | Group → Student Body | — | — | ⬜ Not yet documented |
| Other | Group → Other | — | — | ⬜ Not yet documented |

---

## Diagram Annotations

The official flow diagram contains several ambiguous markers worth tracking:

| Marker | Location | Interpretation |
|--------|----------|---------------|
| `??` | "Have a log in?" → Yes path | Returning user destination undefined |
| `??` | Account creation → failure path | Error message content and display undefined |
| Firm Info ×2 | After email verification | "User inputs Firm Info" appears twice in sequence — may be 2-page form or diagram duplication |
| `separate billing?` | After firm info | Conditional branch — trigger condition undefined |

---

## Open Questions

- [ ] **Returning user path** — where does "Have a log in? → Yes" route to?
- [ ] **Account creation errors** — what validation rules? What error messages? Inline or toast?
- [ ] **Email verification screens** — what does "verification sent" look like? Resend option? Expiry?
- [ ] **Firm Info ×2** — intentional 2-page form or diagram duplication?
- [ ] **Separate billing trigger** — checkbox? Automatic based on plan? Only for certain branches?
- [ ] **Stripe checkout** — hosted (redirect) or embedded (Stripe Elements)?
- [ ] **Student Body flow** — how does Group → Student Body differ from Individual → Student?
- [ ] **"Other" group details** — what form fields appear after the free-text input?
- [ ] **Company flow** — identical structure to Law Firm with different fields, or structurally different?
- [ ] **Sole Lawyer / Researcher flow** — how does it differ from Law Firm (single-person firm)?
