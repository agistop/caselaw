# Design Tokens — Typography

Extracted from onboarding flow screenshots. All values are visual estimates unless marked **Exact**.

---

## Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font-sans` | System / Inter (TBD) | All UI text: labels, inputs, buttons, body, links |
| `font-kalice` | Kalice Trial Medium (serif display, weight 500) | Wordmark "CaseLaw"; page-level headings (e.g. "Are you an individual…") |

> `font-kalice` is a custom display typeface. It should not be used for body copy or UI elements.
> Font files installed at `public/fonts/` — Regular (400), Medium (500), Medium Italic (500 italic).

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
| `italic` | — | `font-kalice` headings; Kalice Medium Italic is a distinct font file |

---

## Typography Combinations (common pairings)

These are recurring text treatments seen across the onboarding flow:

| Pattern name | Tokens | Example usage |
|--------------|--------|---------------|
| Page heading | `text-3xl font-kalice italic` | "Are you an individual or a group?" |
| Kalice title | `text-2xl font-kalice` | Display heading (24px, normal style) |
| Kalice body italic | `text-base font-kalice italic` | Serif body italic (16px) |
| Kalice body | `text-base font-kalice` | Serif body normal (16px) |
| Kalice small italic | `text-sm font-kalice italic` | Serif small italic (14px) |
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

Font files are located at `public/fonts/` with `@font-face` declarations in `src/styles.css`:

- `Kalice-Trial-Regular` — weight 400, normal style
- `Kalice-Trial-Medium` — weight 500, normal style
- `Kalice-Trial-MediumItalic` — weight 500, italic style

Formats: `.woff2`, `.woff`, `.ttf` (with `font-display: swap`).

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
- [x] ~~`font-kalice` exact weight~~ — **Resolved**: ships as Regular (400) and Medium (500) + Medium Italic
- [ ] `font-medium` (500) — confirm it appears as a distinct step vs. `font-normal` / `font-semibold`
- [ ] `text-2xs` (10px) — not observed in onboarding; confirm it exists in the scale
