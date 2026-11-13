---
name: safe-drive-cleanup
description: Audit and clean up a creator's storage drives safely. Report first, move to a Review folder instead of deleting, keep an undo log. Use when asked to free space, find duplicates or clean up drives.
---

# Safe drive cleanup

## Rules (never break these)
- Do not permanently delete anything. Move candidates into a `_Review` folder on the same drive.
- Write a CSV log (`original_path,new_path,size_bytes,reason`) before moving anything.
- Ask the user before any single move over 10 GB, and before touching any folder they have not named.
- Skip anything the user lists as excluded (client work, personal photos, system folders).

## Steps
1. Ask which drives to scan and which folders to exclude.
2. Scan and build a report:
   - top 20 folders by size
   - duplicate files (same name + same size, then confirm by hash)
   - render, preview and cache files (e.g. Media Cache, Peak Files, Adobe Premiere Pro Auto-Save, *.cfa, *.pek)
   - files over 500 MB not opened in 180 days
3. Show the report as a table with the total space that could be recovered. Wait for approval.
4. Move the approved items into `_Review`, keeping the folder structure, and write the log.
5. Report the space freed and where the log is. Remind the user to empty `_Review` themselves after checking.
