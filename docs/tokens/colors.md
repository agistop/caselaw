# Design Tokens — Colors

Extracted from onboarding flow screenshots. All values are visual estimates unless marked **Exact**.
Confidence levels: **Exact** | **Estimated** | **Needs verification**

---

## Implementation: spartan.ng + Tailwind v4

Colors are implemented via **spartan.ng's CSS variable system** in `src/styles.css`. All values use **OKLCH** color space. Tailwind v4 maps them via `@theme inline` blocks.

### How it works

1. **`@layer base :root`** — defines semantic CSS variables (e.g. `--background`, `--foreground`)
2. **`@theme inline`** — registers them as Tailwind colors (e.g. `--color-background: var(--background)`)
3. **Templates** — use Tailwind classes: `bg-background`, `text-foreground`, `border-border`, etc.

```css
/* src/styles.css — excerpt */
@layer base {
  :root {
    --background: oklch(0.985 0 0);       /* page bg */
    --foreground: oklch(0.145 0 0);       /* primary text */
    --primary: oklch(0.145 0 0);          /* dark button bg */
    --primary-foreground: oklch(1 0 0);   /* white text on dark button */
    /* ... see full file for all tokens */
  }
}
```

---

## Spartan Semantic Variable ↔ CaseLaw Token Mapping

| Spartan CSS Variable | OKLCH Value | Approx Hex | CaseLaw Token | Usage |
|---------------------|-------------|------------|---------------|-------|
| `--background` | `oklch(0.985 0 0)` | `~#f8f8f8` | `color-neutral-50` | Page / shell background |
| `--foreground` | `oklch(0.145 0 0)` | `~#0a0a0a` | `color-neutral-950` | Primary text, headings |
| `--card` | `oklch(1 0 0)` | `#ffffff` | `color-white` | Card & modal backgrounds |
| `--card-foreground` | `oklch(0.145 0 0)` | `~#0a0a0a` | `color-neutral-950` | Card text |
| `--popover` | `oklch(1 0 0)` | `#ffffff` | `color-white` | Dropdown backgrounds |
| `--popover-foreground` | `oklch(0.145 0 0)` | `~#0a0a0a` | `color-neutral-950` | Dropdown text |
| `--primary` | `oklch(0.145 0 0)` | `~#0a0a0a` | `color-neutral-950` | Dark button background |
| `--primary-foreground` | `oklch(1 0 0)` | `#ffffff` | `color-white` | White text on dark button |
| `--secondary` | `oklch(0.955 0 0)` | `~#f2f2f2` | `color-neutral-100` | Subtle backgrounds |
| `--secondary-foreground` | `oklch(0.145 0 0)` | `~#0a0a0a` | `color-neutral-950` | Text on secondary |
| `--muted` | `oklch(0.955 0 0)` | `~#f2f2f2` | `color-neutral-100` | Muted surfaces |
| `--muted-foreground` | `oklch(0.525 0 0)` | `~#737373` | `color-neutral-500` | Subtitles, helper text |
| `--accent` | `oklch(0.955 0 0)` | `~#f2f2f2` | `color-neutral-100` | Hover highlights |
| `--accent-foreground` | `oklch(0.145 0 0)` | `~#0a0a0a` | `color-neutral-950` | Text on hover |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `~#dc2626` | `color-error` | Error/destructive states |
| `--border` | `oklch(0.922 0 0)` | `~#e5e5e5` | `color-neutral-200` | Default borders |
| `--input` | `oklch(0.922 0 0)` | `~#e5e5e5` | `color-neutral-200` | Input borders |
| `--ring` | `oklch(0.205 0 0)` | `~#262626` | `color-neutral-800` | Focus ring, selected card ring |
| `--success` | `oklch(0.6 0.2 145)` | `~#16a34a` | `color-success` | Toggle active, "Most Popular" badge |
| `--success-foreground` | `oklch(1 0 0)` | `#ffffff` | `color-white` | Text on success bg |

---

## Tailwind Class Usage

| Need | Tailwind class | Spartan variable |
|------|---------------|-----------------|
| Page background | `bg-background` | `--background` |
| Primary text | `text-foreground` | `--foreground` |
| Muted text | `text-muted-foreground` | `--muted-foreground` |
| Card background | `bg-card` | `--card` |
| Default border | `border-border` | `--border` |
| Input border | `border-input` | `--input` |
| Dark button | `bg-primary text-primary-foreground` | `--primary` / `--primary-foreground` |
| Focus ring | `ring-ring` | `--ring` |
| Success state | `bg-success text-success-foreground` | `--success` / `--success-foreground` |

---

## Legacy Token Reference

The original neutral scale tokens (from screenshot extraction) map to spartan semantic variables as documented above. The raw hex values remain useful for verification against Figma.

| Original Token | Hex | Now maps to |
|---------------|-----|-------------|
| `color-white` | `#ffffff` | `--card`, `--popover`, `--primary-foreground` |
| `color-neutral-50` | `~#f8f8f8` | `--background` |
| `color-neutral-100` | `~#f2f2f2` | `--secondary`, `--muted`, `--accent` |
| `color-neutral-200` | `~#e5e5e5` | `--border`, `--input` |
| `color-neutral-500` | `~#737373` | `--muted-foreground` |
| `color-neutral-800` | `~#262626` | `--ring` |
| `color-neutral-950` | `~#0a0a0a` | `--foreground`, `--primary` |
| `color-success` | `~#16a34a` | `--success` |
| `color-error` | `~#dc2626` | `--destructive` |

---

## Open Flags

- [ ] `color-success` exact hex — verify `#16a34a` against Figma
- [ ] `color-neutral-750` — no longer used in spartan variables; verify if still needed
- [ ] Full primary color ramp (red, blue, yellow, purple) — document when broader design system screens are implemented
