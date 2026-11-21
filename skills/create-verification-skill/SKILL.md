---
name: create-verification-skill
description: "Create a project-local Claude Code skill that drives Bree through a real user path and preserves evidence. Use in Assignment 6."
disable-model-invocation: true
---

# Create a verification skill

Adapted for Claude Code from pstack's `create-verification-skill`. Write the result for the next agent that opens this repository.

## Inspect the repository

Read `package.json`, `SOLO.md`, `docs/spec.md`, and the actual application routes. Derive every command and path from the repository. Do not invent a server, selector, account, or connector.

Identify:

- the synthetic brief command and its visible output;
- the unavailable-source behavior;
- the read-only live preflight;
- the evidence each route can preserve without work data;
- the exact cleanup for anything the verification run starts.

## Generate the skill

Create `.claude/skills/verify-bree/SKILL.md` with frontmatter and these sections:

- **Status:** `DRAFT` until one journey completes every step below.
- **Launch:** exact preparation and command. A short CLI command needs no server.
- **Doctor:** read-only checks for dependencies, the intended revision, and local configuration status.
- **Drive:** repository commands for the synthetic brief, unavailable-source result, and live preflight.
- **Evidence:** capture commands, exit codes, and synthetic output only. Never copy live source content.
- **Cleanup:** remove only scratch state created by the run. Preserve evidence.

Create `.claude/skills/verify-bree/features/README.md` and one file for each mapped user journey. Each feature file must contain these headings:

- `## Sub-features`
- `## How to get to it (user POV)`
- `## Driving it with the repository commands`
- `## Gotchas`

## Prove one journey

Run one complete synthetic journey:

1. Launch or prepare it.
2. Run the doctor checks.
3. Drive the real CLI path.
4. Capture the action, result, and exit code.
5. Run cleanup.
6. Confirm the evidence still exists.

Change the generated skill's status to `VERIFIED` only when all six steps pass. A generated file without an executed journey remains `DRAFT`.

Run `npm run live:check` separately. It proves only local approval and configuration fields. It does not prove authentication, source access, or a successful live connector call.

## Safety boundary

- Use synthetic fixtures for stored evidence and recordings.
- Do not start `npm run brief:live` while generating this skill.
- Do not connect an account or change a connector.
- Do not store customer data, work data, credentials, URLs, raw connector responses, or live briefs.
- Do not weaken a journey to make it pass. Record the blocker under `Gotchas`.

Source: [pstack create-verification-skill](https://github.com/cursor/plugins/tree/main/pstack/skills/create-verification-skill), adapted from Cursor's `.cursor/skills/` output to Claude Code's `.claude/skills/` layout. Licence text is in `../../LICENSES/MIT-pstack.txt`.
