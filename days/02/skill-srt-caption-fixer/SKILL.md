---
name: srt-caption-fixer
description: Correct auto-generated subtitle (.srt) files against a script or notes, keeping timestamps, enforcing line-length rules. Use when someone has Premiere/CapCut auto-captions with mistakes and wants clean subtitles.
---

# SRT caption fixer

## Inputs
- The auto-generated `.srt`
- The script or notes (can contain typos; use them for meaning and names, not exact spelling)
- Optional: a caption style guide (line length, casing, emoji rules)

## Steps
1. Parse the SRT into cues and keep every index and timestamp unchanged.
2. Compare each cue with the script. Fix misheard words, names, places, numbers and brand terms. Prefer the script's meaning; correct its spelling.
3. Apply the style rules: ≤42 characters per line, max 2 lines, no line ending on "a/the/to".
4. Validate: indexes are sequential, each end time is after its start time, and no cue overlaps the next.
5. Output the corrected `.srt` and a change list (`cue #: old → new`), so the editor can review it quickly.

## Never
- Never move timestamps unless the user asks.
- Never invent words for inaudible parts; mark them `[inaudible]`.
