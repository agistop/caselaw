# Design Tokens — Spacing, Border Radius & Shadows

Extracted from onboarding flow screenshots. All values are visual estimates.
Confidence levels: **Exact** | **Estimated** | **Needs verification**

---

## Spacing Scale

Follows Tailwind's 4px base unit. Tokens map to multiples of 4px.

| Token | Value | Tailwind class | Usage in onboarding | Confidence |
|-------|-------|---------------|---------------------|------------|
| `space-1` | 4px | `p-1`, `gap-1` | Icon-to-text gap within buttons | Estimated |
| `space-2` | 8px | `p-2`, `gap-2` | Tag internal padding; option item padding | Estimated |
| `space-3` | 12px | `p-3`, `gap-3` | Input vertical padding | Estimated |
| `space-4` | 16px | `p-4`, `gap-4` | Form field vertical gap; card horizontal padding | Estimated |
| `space-5` | 20px | `p-5`, `gap-5` | — | — |
| `space-6` | 24px | `p-6`, `gap-6` | Card body padding; modal section gap | Estimated |
| `space-8` | 32px | `p-8`, `gap-8` | Modal horizontal padding; shell content padding | Estimated |
| `space-10` | 40px | `p-10`, `gap-10` | Plan card body padding (estimated) | Estimated |
| `space-12` | 48px | `p-12`, `gap-12` | Shell vertical padding (estimated) | Estimated |

> Spacing values are estimated from visual proportion. All values need verification with exact Figma measurements.

---

## Border Radius

| Token | Value | Tailwind class | Usage | Confidence |
|-------|-------|---------------|-------|------------|
| `rounded-sm` | 4px | `rounded-sm` | Very subtle rounding — not clearly observed | Needs verification |
| `rounded-md` | 6–8px | `rounded-md` | Inputs, buttons, badges, tags | Estimated |
| `rounded-lg` | 12px | `rounded-lg` | Type-selection cards, plan cards | Estimated |
| `rounded-xl` | 16px | `rounded-xl` | Modal panel | Estimated |
| `rounded-full` | 9999px | `rounded-full` | Tags/chips, "Most Popular" badge pill | Exact (visually circular) |

---

## Shadows / Elevation

| Token | Value | Usage | Confidence |
|-------|-------|-------|------------|
| `shadow-sm` | — | Type-selection cards, plan cards (subtle lift) | Estimated |
| `shadow-md` | — | Dropdown panel (more lift than cards) | Estimated |
| `shadow-lg` | — | Modal panel overlay (highest elevation) | Estimated |

> Exact shadow values (offset, blur, spread, color, opacity) are not readable from screenshots.
> Reference Tailwind defaults as a starting point; verify in code or Figma.

Tailwind defaults for reference:
- `shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- `shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`

---

## Border Widths

| Token | Value | Usage | Confidence |
|-------|-------|-------|------------|
| `border` | 1px | Default input and card borders | Estimated |
| `border-2` | 2px | Selected card border (`type-selection-card` selected state) | Estimated |

---

## Implementation: spartan.ng `--radius` Variable

Border radius in spartan.ng is controlled by the `--radius` CSS variable in `src/styles.css`:

```css
@layer base {
  :root {
    --radius: 0.5rem;   /* 8px base */
  }
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);    /* 4px */
  --radius-md: calc(var(--radius) - 2px);    /* 6px */
  --radius-lg: var(--radius);                /* 8px */
  --radius-xl: calc(var(--radius) + 4px);    /* 12px */
}
```

Spartan helm components (buttons, inputs, cards, dialogs) automatically use these radius values. Changing `--radius` in `:root` will cascade across all components.

### Resolved: selected card border

The `type-selection-card` selected state uses `ring-2 ring-ring` (not `border-2`). This avoids layout shift since `ring` is rendered as a box-shadow and doesn't affect box model dimensions.

---

## Open Flags

- [ ] All spacing values — need exact Figma measurements; current values are proportional estimates
- [ ] Shadow values — confirm if custom values are used or if Tailwind defaults apply
