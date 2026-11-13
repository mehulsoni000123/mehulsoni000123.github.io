---
name: reference-style-graphics
description: Extract a reusable motion-graphics style sheet from reference frames and design consistent explainer graphics (charts, maps, stat cards, title cards) for new scripts. Use when a creator wants graphics "in the same style as this video".
---

# Reference style graphics

## 1. Style extraction
From 6–10 reference frames, record:
- **Typography:** families, weights, sizes relative to frame height, letter-spacing
- **Palette:** hex values for background, primary, accent, positive and negative colours
- **Layout:** margins, grid, alignment, where titles and labels sit, safe areas
- **Elements:** card radius, shadows, icon style, chart style (bar, line, map)
- **Motion:** entry/exit types, easing, durations, stagger

Save this as `style-sheet.md`.

## 2. Graphic design per script line
For each line, choose a format: stat card, comparison, timeline, map or list. Then output:
- the on-screen text (short)
- the layout, referencing the style sheet
- the animation beats with timings
- the build route: AE JSX, Remotion/HTML or an image-generation prompt

## 3. Consistency check
Before delivering, compare every graphic against the style sheet. Fix any font, colour or spacing that drifts.
