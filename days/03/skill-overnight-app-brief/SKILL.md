---
name: overnight-app-brief
description: Turn a non-coder's app idea into a buildable brief and an overnight build plan for Claude Code. Use when someone says "I want an app that…" but can't code.
---

# Overnight app brief

## Step 1: Interview (5–8 questions max)
Ask about: the problem in one sentence, who uses it, the 3 must-have features, which device (Android, iPhone or web), the data it needs (inputs and storage), anything private, and what "done" looks like.

## Step 2: Write the brief (one page)
Sections:
- Problem
- Users
- Must-have features
- Screens: each screen with its purpose and main elements
- Data and privacy: what is stored, where it is stored, and never cloud by default for money or health data
- Out of scope
- Definition of done: what can be demoed

## Step 3: Build plan
- Pick the simplest stack that works on the target device.
- List the tools to install, with versions.
- Milestones: scaffold, then core feature, then screens, then a test on the device, then a build artifact (APK, web build).
- For each milestone, write the check that proves it works.

## Step 4: Guardrails for the unattended run
- Work only inside the project folder.
- Retry failures with an alternative before stopping.
- Write `SUMMARY.md` at the end covering what was built, how to run it, and what's left.
