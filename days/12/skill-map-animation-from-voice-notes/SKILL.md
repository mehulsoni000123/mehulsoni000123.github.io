---
name: map-animation-from-voice-notes
description: Turn an editor's voice notes ("map here, show the school") into a map shot list and build accurate map animations (satellite or street tiles, pins, routes, themed labels) for a video. Use when a video needs location or neighbourhood maps without paid plugins.
---

# Map animations from voice notes

## 1. Shot list
- Transcribe the voice notes. For each note, record: timecode in the edit, place(s), what to show (pin, route, area, time-lapse of satellite years), and duration.
- Ask the editor to confirm the list.

## 2. Data
- Geocode each place (lat/lng). Store in `maps.json`: `{shots:[{id, places:[{name,lat,lng}], route?, style:'satellite'|'street', dur}]}`.
- Never invent locations; ask when a place is ambiguous.

## 3. Build
- Use the existing map tool (Tauri app) or a small script: load the tiles, draw the pins/labels in the brand theme, ease the camera between the points.
- Export 1080x1920 or 1920x1080 at the project fps.
- Satellite history: use Google Earth Pro historical imagery (screenshots per year) and cross-fade.

## 4. QC
- Labels must be readable at phone size and inside the safe areas.
- Spelling of place names must be checked against the source.
- Include tile attribution.

## 5. Deliver
- Name each file `map_<shot id>_<place>.mp4` and list them in order with timecodes for the editor.
