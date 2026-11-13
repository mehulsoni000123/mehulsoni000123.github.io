---
name: screen-recording-zoom-build
description: After Effects (JSX) system for cinematic screen-recording edits — keyframed zoom beats, highlights and lower thirds. Use when turning raw screen recordings into polished explainer chapters.
---

# Screen-recording zoom build (After Effects)

## Setup
- Keep the comp at the source size (e.g. 3840×2160). Scale down only at export.
- Put helper functions in one library .jsx:
  - `frame(window)`: zoom/pan to a source rectangle
  - `addRect`: rounded highlight
  - `setKeys(prop, keys, ease)`

## Beats
- Each beat is `{start, dur, window:[x,y,w,h], ease}`.
- Compute the zoom scale as `max(compW/winW, compH/winH)`.
- Clamp the window inside the source so you never show the edge.
- Keep the zooms gentle (≤2.2×) and eased (in/out). Leave 0.4 s of hold after each move.

## Highlights & lower thirds
- Highlight: a rounded rect with a stroke, scale-compensated so its width stays constant while the camera zooms.
- Lower third: a title plus a subline, with a 0.3 s fade/slide in and out, inside title-safe.

## QA
Render stills at every beat, then check the framing, text and safe areas. Fix the problems and re-run.
