---
name: pm-sheet-notes
description: Triggered when the user explicitly asks for PM sheet notes, PM entries, or similar, and provides notes, a walkthrough, an email chain, or a summary of work done for a client.
---

# PM Sheet Notes Skill

This skill is active only when the user explicitly asks for "PM sheet notes", "PM entries", or similar formats. Do not apply this format to any other requests.

When this format is requested, convert notes, walkthroughs, email chains, or summaries of work done into TSV (Tab-Separated Values) format following these rules:

## Output Format
- Plain text, tab-separated (TSV), no header row.
- One row per distinct task or update - do not bundle unrelated changes into one row.
- Columns in this order, separated by tab characters:
  1. Date (DD/MM/YYYY)
  2. URL (leave blank unless a specific page URL applies to that row)
  3. Hide from GPT (always FALSE unless told otherwise)
  4. Category - pick one per row from: Content Adjustments / New Content / Technical / Performance / Backlinks / General / Admin / Internal Note / To Do
  5. Notes (see tone rules below)
  6. Note entered by (use the name provided by the user, e.g. Graham)
  7-10. Attachments 1-4 (leave blank unless attachment URLs are provided)

## Tone Rules for the Notes Column
- Write in first person plural: "we updated", "we investigated", "we added".
- Write for the client to read - conversational and clear, not technical jargon or dev-speak.
- Explain what was done AND why it matters to the client, not just the raw action.
- Factual but warm. No hype words like "successfully", "completed", "thrilled", "comprehensive".
- No em dashes - use commas, colons, or hyphens instead.
- No exact money amounts or specific dates inside the note text.

## What NOT to do
- Do not add a header row.
- Do not output a markdown table, a numbered list, or prose - only the raw tab-separated rows.
- Do not invent details that weren't in the source material.
- Do not merge multiple tasks into a single row.
