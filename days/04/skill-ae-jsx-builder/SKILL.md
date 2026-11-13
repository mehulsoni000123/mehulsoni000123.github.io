---
name: ae-jsx-builder
description: Build or extend After Effects compositions by writing and running ExtendScript (JSX), matching an existing project's style, then self-checking rendered frames. Use for repeatable AE motion graphics sections.
---

# After Effects JSX builder

1. **Read the style.** Inspect the existing comps: fonts, colours (hex), easing (keyframe influence), durations and safe areas. Write them down as a style sheet.
2. **Back up.** Save a copy of the project (`<name>_backup_<date>.aep`) before running anything.
3. **Write the JSX.**
   - Build the comp, layers, text, shapes and keyframes from the style sheet.
   - Wrap everything in `app.beginUndoGroup()` / `app.endUndoGroup()`.
4. **Run it.** Use File > Scripts > Run Script File, or `afterfx.exe -r path\to\script.jsx`.
5. **Self-QA.** Render still frames at regular intervals (`comp.saveFrameToPng`) and check them for overlaps, text outside title-safe, wrong colours and timing gaps. Fix the issues and rerun.
6. **Report** what was built, the frames checked and anything left for a human to review.
