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

### Q1 — Which are you?

Four user types branch from this question:

```
Q1: Which are you?
├── Student
├── Sole Lawyer / Researcher
├── Law Firm
└── Company
```

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

---

### Branch: Company
- **Offer:** TBD
- **Info collected:**
  - Company name
  - EIN
  - Size (1–10, 11–50, etc.)
- → **Q3:** What would you like this account to be called? *(pre-filled from responses)*

---

## Open Questions / TBDs

- [ ] Exact plan limits (searches, users, docs storage) for Company/Firm tiers
- [ ] What happens when Student exceeds 10 EDU emails — what's the cost?
- [ ] Company branch offer (is it also 1 month free?)
- [ ] Are there more user type options beyond the 4 shown? ("For yourself" also mentions Researcher — is that separate from Sole Lawyer/Researcher?)
- [ ] Pricing for Personal and Standard plans
