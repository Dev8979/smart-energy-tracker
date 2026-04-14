# Design Brief

## Direction

Smart Energy Tracker – AI Insights — Modern SaaS dashboard for energy professionals with purple-driven visual system, confident and energetic.

## Tone

Bold Modern with refined restraint — vibrant purple primary with warm amber accents, high-contrast UI elements, and clear information hierarchy to serve professional users who need clarity without distraction.

## Differentiation

Vibrant purple-to-orange gradient banners paired with glassed, minimal cards create a premium tech aesthetic that feels both trustworthy and energetic — not corporate-flat or generic SaaS.

## Color Palette

| Token      | OKLCH         | Role                              |
| ---------- | ------------- | --------------------------------- |
| background | 0.98 0.005 260 | Light neutral surface             |
| foreground | 0.16 0.01 260  | Primary text, deep neutral        |
| card       | 1.0 0.0 0     | Card and panel backgrounds        |
| primary    | 0.55 0.25 270 | Purple accent, charts, highlights |
| accent     | 0.72 0.2 55   | Warm orange, secondary highlights |
| muted      | 0.94 0.01 260 | Subtle backgrounds, disabled text |
| border     | 0.91 0.005 260| Subtle dividers                   |

## Typography

- Display: Space Grotesk — geometric, confident headlines and section titles
- Body: DM Sans — clean, legible UI text and body copy
- Scale: hero `text-5xl font-bold tracking-tight`, h2 `text-3xl font-bold tracking-tight`, label `text-sm font-semibold uppercase`, body `text-base`

## Elevation & Depth

Subtle layer hierarchy via shadow tokens: `shadow-card` for standard panels, `shadow-elevated` for interactive hover states. Gradient banners create depth through color, not shadow.

## Structural Zones

| Zone    | Background                    | Border            | Notes                                      |
| ------- | ----------------------------- | ----------------- | ------------------------------------------ |
| Header  | `bg-primary` gradient overlay | `border-b`        | Purple navbar with white text              |
| Sidebar | `bg-sidebar` light            | `border-r`        | Minimal accent for active items            |
| Content | `bg-background`               | —                 | Clean white, 2x2 card grid below banner   |
| Cards   | `bg-card` white               | subtle `bg-muted` | Rounded 12px, `shadow-card`                |

## Spacing & Rhythm

Spacious layout (gap-6, gap-8) with consistent padding (p-6, p-8). Summary banner leads with generous whitespace, cards stack in responsive 2x2 grid. Tight tracking on headers, loose line-height on body text.

## Component Patterns

- Buttons: `bg-primary text-white rounded-lg transition-smooth`, hover `opacity-90`, active `scale-95`
- Cards: `bg-card shadow-card rounded-xl`, 12px border-radius for visual softness
- Badges: `bg-muted text-foreground rounded-full px-3 py-1 text-xs font-semibold`
- Charts: Primary purple (`--chart-1`), secondary warm orange (`--chart-2`), minimal gridlines

## Motion

- Entrance: Fade-in on card mount (200ms ease-out), staggered for grid items
- Hover: `transition-smooth` on all interactive elements, subtle opacity/color change
- Decorative: Smooth transitions on chart redraw, no bouncy animations

## Constraints

- No full-page gradients; gradients reserved for hero banners and accent highlights
- All color literals use CSS variables; no hex values in components
- Border-radius intentionally varied: 0px (input), 8px (buttons), 12px (cards)
- Dark mode palette provided; light mode is primary design surface

## Signature Detail

Purple-to-orange gradient "Summary Banner" with overlaid efficiency metrics creates immediate visual identity and differentiates from flat corporate dashboards.
