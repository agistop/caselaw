# Design Tokens — Typography

Extracted from onboarding flow screenshots. All values are visual estimates unless marked **Exact**.

---

## Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font-sans` | System / Inter (TBD) | All UI text: labels, inputs, buttons, body, links |
| `font-kalice` | Kalice (serif display) | Wordmark "CaseLaw"; page-level headings (e.g. "Are you an individual…") |

> `font-kalice` is a custom display typeface. It should not be used for body copy or UI elements.
> Confirm the exact font file name and licensing with the design team.

---

## Type Scale

| Token | Size | Line height | Typical usage |
|-------|------|-------------|---------------|
| `text-2xs` | 10px | — | Very small labels (not observed in onboarding) |
| `text-xs` | 12px | — | Helper text, footer links, legal copy ("By continuing you agree…") |
| `text-sm` | 14px | — | Input labels, option items, body text, button labels |
| `text-base` | 16px | — | Form field text, card subtitle, standard prose |
| `text-lg` | 18px | — | Modal section headings |
| `text-xl` | 20px | — | Wordmark "CaseLaw" |
| `text-2xl` | 24px | — | Modal titles ("Add collaborators", "Law firm details") |
| `text-3xl` | 30px | — | Page headings ("Are you an individual…"), plan price figures |

> Line height values are not extractable from screenshots. Use Tailwind defaults until verified with dev.
> No 13px step in the scale — it was reviewed and dropped in a prior session.

---

## Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `font-normal` | 400 | Body text, option items, helper text |
| `font-medium` | 500 | Input labels, subtle emphasis (estimated) |
| `font-semibold` | 600 | Card labels, button text, section headings, modal titles |
| `font-bold` | 700 | Plan price figures, "Log in" accent link in footer |

---

## Font Style

| Token | Value | Usage |
|-------|-------|-------|
| `italic` | — | `font-kalice` headings are rendered in italic (the typeface is inherently italic) |

---

## Typography Combinations (common pairings)

These are recurring text treatments seen across the onboarding flow:

| Pattern name | Tokens | Example usage |
|--------------|--------|---------------|
| Page heading | `text-3xl font-kalice italic` | "Are you an individual or a group?" |
| Modal title | `text-2xl font-semibold font-sans` | "Add collaborators", "Law firm details" |
| Section heading | `text-lg font-semibold font-sans` | Modal step headings |
| Body | `text-sm font-normal font-sans` | Option item labels, body copy |
| Label | `text-sm font-semibold font-sans` | Form field labels, card names |
| Caption | `text-xs font-normal font-sans` | Helper text, legal copy |
| Wordmark | `text-xl font-kalice italic` | "CaseLaw" in shell header |

---

## Implementation: Tailwind v4 + spartan.ng

Typography uses Tailwind v4 default scale classes directly in templates. No custom `@theme` font-size overrides are needed — the Tailwind v4 defaults match the CaseLaw scale exactly.

### Kalice font registration

The custom `font-kalice` family is registered in `src/styles.css`:

```css
@theme inline {
  --font-kalice: "Kalice", serif;
}
```

Font files are located at `src/assets/fonts/kalice/` with `@font-face` declarations in `src/styles.css`.

### Template usage

```html
<!-- Wordmark -->
<span class="font-kalice italic text-xl text-foreground">CaseLaw</span>

<!-- Page heading -->
<h1 class="text-2xl font-semibold text-foreground">Create your account</h1>

<!-- Muted body text -->
<p class="text-sm text-muted-foreground">Select one of the following</p>
```

> Note: color classes now use spartan semantic tokens (`text-foreground`, `text-muted-foreground`) instead of direct neutral scale (`text-neutral-950`, `text-neutral-500`). See `docs/tokens/colors.md` for the full mapping.

---

## Open Flags

- [ ] Line height values — not extractable from screenshots; using Tailwind v4 defaults
- [ ] `font-sans` exact font name — is it Inter, or a custom typeface?
- [ ] `font-kalice` exact weight — does it ship in semibold or only regular/italic?
- [ ] `font-medium` (500) — confirm it appears as a distinct step vs. `font-normal` / `font-semibold`
- [ ] `text-2xs` (10px) — not observed in onboarding; confirm it exists in the scale
