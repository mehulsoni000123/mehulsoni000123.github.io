---
name: drive-cleanup-compress
description: Free up drive space for video creators. Scan, find exact duplicates and junk, compress old large videos to H.265, and move everything to a Review folder (never delete). Use when someone says clean up, free space, or compress my drive.
---

# Drive cleanup + compression

## 0. Ask first (one message)
- Which drive(s)?
- What must never be touched? Typical answers: the latest projects, the last 20 reels, client deliveries, photos.
- Is HandBrake or FFmpeg installed? If neither is, install one, with the user's OK.

## 1. Read-only scan
Skip hidden and system folders.
1. Inventory every file (path, size, modified date).
2. Exact duplicates: group by size, hash the head, middle and tail, then a full hash to confirm.
3. Junk: editor caches (Media Cache, peak/.pek/.cfa files, auto-saves, preview renders), temp files, installers, empty folders.
4. Video probe with ffprobe: codec, resolution, fps, bitrate, HDR, alpha.
5. Report: counts and GB per category, the biggest folders, and the compression savings estimate. **Wait for the user to choose.**

## 2. Move (never delete)
- Create `<drive>:\Review\Exact Duplicates`, `Safe Junk` and `Quick Look`.
- Move the chosen items, keeping their relative paths, and write `Review\MOVE_MANIFEST.tsv` (old path → new path).

## 3. Compress old, large videos
- Candidates: videos over 500 MB that are not in the protected list and have no alpha. HDR only if the user approves.
- Encode to H.265:
  - HandBrake preset "H.265 MKV 1080p30", or match the source resolution
  - or FFmpeg `-c:v libx265 -crf 24` (`hevc_nvenc -cq 25` on NVIDIA)
  - copy the audio
- Verify each file: duration, resolution and audio tracks match, the file decodes to the end, and the new file is under 85% of the original size.
- Swap: move the ORIGINAL to `Review\Compressed Originals\<same path>` and put the new file at the original path with the same name.
- Pilot 3 files first, then batch. Log every file (OK, REJECTED or FAIL).

## 4. Hand back
- Report the GB saved, the files done or skipped, and where the logs are.
- Tell the user to spot-check their projects, then delete from Review themselves.
