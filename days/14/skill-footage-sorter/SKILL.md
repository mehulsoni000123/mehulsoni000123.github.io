---
name: footage-sorter
description: Sort a shoot's clips into A-roll, B-roll, drone, close-up and other bins (and Premiere bins), using filenames, metadata and sampled frames, without touching the source files. Use when a project has many unsorted shots.
---

# Footage sorter

## 1. Inventory
- List every video file: name, duration, resolution, fps, camera model (from metadata), and the created time.

## 2. Classify
- Sample 3 frames per clip (10%, 50%, 90%).
- A-roll: a person talking to camera, stable framing, longer duration, audio with speech.
- Drone: high aerial view, DJI metadata, or a sky/rooftop perspective.
- Close-up: a detail or macro shot filling the frame.
- B-roll: everything else that shows the place.
- If unsure, mark it `other` and say why.

## 3. Organise (non-destructive)
- In Premiere, create the bins and import the clips into them, or write a CSV mapping `clip → bin`.
- Never move, rename or delete source files unless the user asks.

## 4. Report
- A table of counts per bin, the clips you were unsure about, and the total duration per bin.
