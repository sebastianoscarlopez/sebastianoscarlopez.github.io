# Design Guide

Reference for all visual decisions on the Sebastian Oscar Lopez personal site.
Extracted from `public/logo.svg`, `public/design-mockup.svg`, and `public/color-palette.jpg`.

## Color Palette

| Name     | Hex       | Tailwind        | Usage             |
| -------- | --------- | --------------- | ----------------- |
| Purple   | `#60418d` | `text-purple`   | Primary brand, logo background |
| Orange   | `#f46e00` | `text-orange`   | Accent, logo detail |
| Teal     | `#2ad8ae` | `text-teal`     | Accent, logo detail |
| Gold     | `#ffbd03` | `text-gold`     | Accent, logo detail |
| Gold alt | `#fbbc0f` | —               | Secondary gold variant, less prominent |

Tailwind colors defined in `app/globals.css` via `@theme inline { --color-* }`.

## Logo

- **File**: `public/logo.svg`
- **Format**: Square SVG, 1080x1080 viewBox
- **Style**: Circular/organic abstract mark composed of purple base with orange, teal, and gold accents
- **Usage with `next/image`**: `width` and `height` props required; aspect ratio is 1:1
- For favicon or small icons, scale down proportionally

## Layout

Based on `public/design-mockup.svg`:

- **Width**: 1920px fluid (full-width restraint at ~1440–1920px)
- **Two-section structure**:
  - Section A (hero area): ~1083px tall — large visuals, key messaging
  - Section B: ~1083px tall — secondary content
- **Centered max-width pattern** — content within a ~1200px–1400px column
- **Vertical rhythm**: generous spacing between sections

## Visual Style

- **Dark/rich aesthetic** — purple-heavy backgrounds with white/light text and colored accents
- **Clipping masks and shape layers** — organic, flowing shapes used to frame images and content
- **Mix-blend-mode: multiply** — images overlaid with color at reduced opacity for depth
- **Decorative strokes** — thin (0.25px–3px) white/colored dashed and solid decorative lines
- **Opacities**: 0.3 (subtle), 0.6 (prominent overlay)
- **Rounded geometry** — no sharp corners in decorative elements; organic curves throughout

## Typography

- **Primary**: `Poppins` (Google Fonts), all weights 100–900 + italic variants
  - Loaded via `next/font/google` in `app/layout.tsx`
  - CSS variable: `--font-poppins`, mapped to Tailwind's `--font-sans`
- **Stack**: `var(--font-poppins)`, fallback to system sans-serif
- **Weight usage**: 300/400 for body, 500/600 for headings, 700/800 for hero text

## Asset References

| File                       | Type           | Notes                     |
| -------------------------- | -------------- | ------------------------- |
| `public/logo.svg`          | Vector logo    | Primary brand mark        |
| `public/design-mockup.svg` | Design mockup  | Full desktop layout ref   |
| `public/color-palette.jpg` | Color palette  | Quick visual reference    |

## Adding New Sections

When building out the site, follow these patterns:

1. Use the **purple** as the dominant background or hero color
2. **White** text on dark backgrounds; **dark** text on light backgrounds
3. Accent with **orange**, **teal**, and **gold** sparingly — each should have one clear purpose per section. **Teal should be used sparingly** as a detail accent only (e.g., small icons, thin decorative lines), not for large backgrounds or primary text.
4. Maintain generous **vertical spacing** between sections
5. Decorative **SVG shapes** (curves, organic blobs) between sections as dividers rather than hard lines
6. **Max-width** container (~1200px) for text-heavy content
7. Images should feel **integrated** — use clipping paths, rounded corners, and color overlays
