# CaseLaw — Product Context

> Living document. Updated as new context is shared. Reference this before analyzing any flow.

---

## What CaseLaw Is

A SaaS legal-tech web application for law firms, companies, researchers, and students to manage legal work, time tracking, billing, and case strategy.

---

## User Roles

Everyone is a **User**. Roles are additive attributes on top of that.

| Role | Key Capabilities |
|------|-----------------|
| **Platform Owner** | Close account, billing (platform-level), control who are platform admins |
| **Platform Admin** | Add/remove users across all projects, promote any user, permanently delete/add users, verify/change rates per client, approve/edit hours |
| **Billing Admin** | View/generate invoices, mark paid/pending, make notes, update billing method, final approval of approved hours |
| **Project Admin** | Add/remove users per project, promote to project admin, set hourly rate per user, approve/edit hours |
| **User** | Change a specific timesheet entry line item to a different hourly rate |

### Platform Admin Dashboard Shows
- All projects (archived/deleted)
- All users
- Top performing lawyer
- Win count
- Cost/hours per employee

### Project Admin Controls
- Billing
- Email
- Users (add, delete, edit)
- Notifications
- Invoices
- Project status

### Timesheet Entry Structure
| Field | Input type |
|-------|-----------|
| Company | Pull down |
| Project | Pull down |
| Hours | Fill in |
| Description | Fill in |
| Rate | Pre-filled / can be modified |

---

## Plans

| Plan | Notes |
|------|-------|
| Personal | — |
| Standard | — |
| Business Pro | $500/pm |
| Enterprise | $1,000/pm (talk to enterprise team) |

- **Student:** Can add up to 10 EDU email addresses (exceeded = costs X — TBD)
- **Company/Firm:** X searches, X users, AI access, strategies, X docs storage (limits TBD)

---

## Onboarding Flow

> **Official flow diagram:** `docs/flows/onboarding/onboarding-flow-diagram.pdf`

### Entry Point — "Have a log in?"

The first decision in the flow checks whether the user already has an account:

```
Start → "Have a log in?"
├── Yes → ?? (existing user path — destination undefined in diagram)
└── No  → proceed to Individual / Group selection
```

> **Open question:** The "Yes" path is marked "??" in the official diagram. Likely routes to a login page or dashboard, but needs product clarification.

---

### Q1 — Individual or Group?

```
Individual or Group?
├── Individual
│   ├── Student
│   └── Sole Lawyer / Researcher
└── Group
    ├── Law Firm
    ├── Company
    ├── Student Body
    └── Other → free-text input: "which best describes what you do"
```

**Group categories** (from official diagram): Law Firm, Company, Student Body, Other.

**"Other" fallback:** If the user selects "Other" from the group dropdown, they are shown a free-text input: *"which best describes what you do"*. This captures unlisted organization types.

---

### Shared Steps (All Branches)

After type/persona selection, all branches follow these shared steps:

1. **Create Account** — email + password (or OAuth)
2. **Account validation** — error states for invalid email / password requirements (diagram marks error handling with "??")
3. **Email verification** — verification email sent → user clicks link → returns to CaseLaw platform
4. **Details form** — branch-specific fields (firm info, student info, etc.)
5. **Add Collaborators** — invite teammates/classmates
6. **Separate Billing Address** — conditional step: if billing address differs from org address (diagram shows decision branch)
7. **Terms of Service** — user accepts ToS
8. **Choose Plan** — Stripe integration; user selects plan and clicks "finish"
9. **Checkout Page** — Stripe checkout; user enters payment info and clicks "pay & subscribe"
10. **CaseLaw Homepage** — flow exit point; user lands on the main app

---

### Branch: Student
- **Offer:** Free until graduation
- **Info collected:**
  - When do you graduate?
  - Your name
  - University
  - Address
  - Student code
- → **Q3:** What would you like this account to be called? *(pre-filled from responses)*

---

### Branch: Sole Lawyer / Researcher
- **Offer:** 1 month free access
- **Info collected:**
  - Name
  - Company name
  - Address
- → **Q3:** What would you like this account to be called? *(pre-filled from responses)*

---

### Branch: Law Firm
- **Offer:** 1 month free
- **Info collected:**
  - Law firm name
  - Firm address
  - Size of firm (1–5, 6–15, etc.)
  - Firm EIN
- → **Q3:** What would you like this account to be called? *(pre-filled from responses)*

> **Note from diagram:** "User inputs Firm Info and clicks continue" appears **twice** in sequence. This may indicate a 2-page form or could be a diagram duplication. Needs clarification.

---

### Branch: Company
- **Offer:** TBD
- **Info collected:**
  - Company name
  - EIN
  - Size (1–10, 11–50, etc.)
- → **Q3:** What would you like this account to be called? *(pre-filled from responses)*

---

### Branch: Student Body (Group)
- **Status:** Not yet documented. Likely similar to Student branch but as a group/organization account.
- Needs product clarification on how it differs from the Individual → Student path.

---

### Branch: Other (Group)
- **Status:** Not yet documented.
- After selecting "Other" from the group dropdown, user sees a free-text input: *"which best describes what you do"*.
- Remaining flow (account creation → details → collaborators → terms → plan) presumably follows the shared steps, but specific details form fields are undefined.

---

## Implementation Status

| Flow | Status |
|------|--------|
| Law Firm (Group) | Implemented — 9 screens |
| Student (Individual) | Implemented — 8 screens |
| Company (Group) | Documented in product-context only — no screens |
| Student Body (Group) | Not yet documented or implemented |
| Sole Lawyer / Researcher (Individual) | Documented in product-context only — no screens |
| Other (Group) | Not yet documented or implemented |

---

## Open Questions / TBDs

- [ ] Exact plan limits (searches, users, docs storage) for Company/Firm tiers
- [ ] What happens when Student exceeds 10 EDU emails — what's the cost?
- [ ] Company branch offer (is it also 1 month free?)
- [ ] Are there more user type options beyond the 4 shown? ("For yourself" also mentions Researcher — is that separate from Sole Lawyer/Researcher?)
- [ ] Pricing for Personal and Standard plans
- [ ] **"Have a log in?" → Yes path** — where does the returning user go? Login page? Dashboard? (diagram shows "??")
- [ ] **Account creation error states** — what are the exact validation rules and error messages for invalid email / weak password? (diagram marks with "??")
- [ ] **Email verification** — what does the "verification sent" screen look like? Is there a resend option? What happens if verification expires?
- [ ] **Firm Info appears twice in diagram** — is this a 2-page form (basic info → additional details) or a diagram duplication?
- [ ] **Separate billing address** — what triggers this conditional? Is it a checkbox ("billing address differs from firm address") or automatic based on plan type?
- [ ] **Stripe checkout page** — is this a Stripe-hosted checkout (redirect) or an embedded Stripe Elements form within CaseLaw?
- [ ] **Student Body vs Student** — how does the Group → Student Body path differ from Individual → Student?
- [ ] **"Other" group type** — what details form fields are shown after the free-text input?
