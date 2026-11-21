# Optional design skills for Day 5

The design skills below can improve Bree's interface or the facilitator's illustrations. They are optional. The lesson also uses the participant repository's project-local visual-plan and verification skills. This guide references upstream design skills; it does not redistribute or install them.

Bree's target is a dated, private HTML daily brief inspired by Dia's editorial structure. Build and review the complete synthetic page first. Then connect one approved read-only source. Missing sections remain OPEN. Keep real briefs outside the repository; never use them in design reports or recordings. The participant repository's current assignments and `reference/dia-to-bree.md` define the exact contract and prompts.

Use the classroom slides, accepted specification and existing visual system first. Preserve Jessy's layout patterns and AetherLink branding. Generic advice against purple, gradients or cards does not override the supplied design reference.

## Choose one skill for one result

| Skill | When to use it | Visible result |
| --- | --- | --- |
| [Impeccable](https://github.com/pbakaus/impeccable) | Build and review: improve an existing brief's hierarchy, clarity and accessibility. | One ranked critique, followed by one accepted improvement. |
| [Emil Kowalski: Break UI](https://aiforui.dev/skills/break-ui) | Test: exercise long text, missing values, empty lists and unusual characters. | A reproducible UI failure and its verified fix. |
| [Emil Kowalski: Design Engineering](https://aiforui.dev/skills/emil-design-eng) | Optional interaction work after the basic brief works. | Feedback or motion that helps the reader understand a state change. |
| [MengTo: Design-First UI Prompting](https://github.com/MengTo/Skills/blob/main/agent-skills/ui/design-first-ui-prompting/SKILL.md) | Design: turn the accepted brief specification into concrete visual constraints. | A short UI specification with hierarchy, layout and exact copy. |
| [Benji Taylor: Stageshow](https://github.com/benjitaylor/skills/tree/main/stageshow) | Facilitator storytelling: illustrate one interaction using fictional content. | A clearly labelled illustration or animation. It is not evidence of a live connector. |

For the participant route, start with Impeccable for one design review or Break UI for one test. Use Stageshow when preparing teaching material. Add other skills only when they support an accepted task.

## Plan and prove the Bree journey

Use this pack's offline [`/visual-plan`](../skills/visual-plan/SKILL.md) before implementation when the participant needs to review Bree's complete flow. It creates one self-contained HTML plan and does not require a hosted planning service.

After Bree works, the upstream [pstack verification generator](https://github.com/cursor/plugins/tree/main/pstack/skills/create-verification-skill) can create a project-specific way to launch, drive and observe the real app. The upstream skill targets Cursor and writes to `.cursor/skills/`. For Claude Code, adapt its output to `.claude/skills/verify-bree/`. Depending on how the pstack plugin is registered, its command may be namespaced as `/pstack:create-verification-skill`; inspect the available commands before invoking it.

The Bree lesson uses visual planning in A3 and project-specific verification in A6. Follow the participant repository's bundled versions and exact assignment prompts. No full pstack installation is required. A visual plan is an approval artifact, not proof. A generated verification skill remains a draft until its own launch, doctor, drive, evidence and cleanup instructions have completed successfully.

## Inspect before installing

Read the selected upstream skill and its requirements. Check its licence and dependencies. Choose the current project as the installation scope. Preserve any existing skill with the same name. Review proposed hooks, commands and permission changes before accepting them.

Upstream installation entry points are:

```sh
npx impeccable install
```

```sh
npx skills@latest add emilkowalski/skills --skill break-ui
```

These commands are references, not a workshop setup step. They have not been executed as part of this guide. Inspect the current upstream installer before running it. Reload Claude Code after a project-local install.

Impeccable's current command entry point is `/impeccable`. Its setup uses `/impeccable init`; review commands include `critique` and `audit`, and `polish` applies finishing work. Inspect the files each command proposes to create or change.

Do not use Impeccable live mode in this workshop. The upstream live-copy fallback can invoke an agent with permission checks disabled. Keep changes inside the normal Claude Code approval flow.

## Copy-ready prompts

### Review the journey before building

```text
/visual-plan plan Read Bree's accepted specification and the actual repository plan. Create one offline visual plan for the smallest complete journey: an approved source provides permitted data, the Claude Agent SDK produces a private daily brief, and the interface shows either the sourced result or an unavailable-source state. Show the human approval points and the evidence required after each step. Use synthetic labels and no real work data in the plan. Do not change source files, connect accounts, install dependencies, or invent commands and paths that are not present in the repository.
```

Review the HTML plan before implementation. Keep unresolved permissions or source choices visible instead of filling them with assumptions.

### Create a repeatable proof for Bree

```text
/create-verification-skill Inspect the actual Bree repository and create a project-local Claude Code verification skill at .claude/skills/verify-bree/. Adapt the upstream Cursor generator instead of writing to .cursor/skills/. Derive the launch, doctor, drive, evidence and cleanup steps from commands, routes and harnesses that exist in this repository. Map Bree's real user journeys, including a successful private brief and an unavailable-source result. Do not invent commands, connect live accounts, write through a connector, or put real work data in evidence. Use approved connectors and an authorised model account only when the repository already provides that permitted path. Execute one safe journey with synthetic data and preserve its evidence. If the journey cannot run, label the generated skill Draft and state the exact blocker.
```

If the installed plugin exposes `/pstack:create-verification-skill`, use that command name with the same prompt. A recorded synthetic journey proves the local app behaviour, not a live corporate connector.

### Review one brief before changing it

```text
/impeccable critique Bree's brief view. Read only. Use the accepted specification and our existing AetherLink design reference. Check whether the reader can identify the next action, its source, and unavailable-source states. Report the three most important issues. Do not read live source data, change files, install dependencies, or alter permissions. Stop so I can approve one improvement.
```

After choosing an issue, ask Claude Code to implement only that change. Inspect the diff and the rendered result at the classroom screen size before accepting it.

### Test the interface with synthetic data

```text
/break-ui Test only Bree's isolated UI with synthetic, non-customer data. Do not call live connectors or copy real source content. Try long titles, empty lists, missing optional fields, unavailable-source states, and unusual characters. Report one reproducible failure with its screen size and expected result. Propose the smallest fix and stop for my approval. Keep synthetic cases separate from the live data path.
```

After the fix, repeat the failing case. Check that the ordinary brief still renders. A synthetic UI test proves layout behaviour; it does not prove that a live connector works.

### Illustrate one teaching moment

```text
/stageshow Create one facilitator illustration showing a fictional agenda item becoming a short Bree brief. Label it "Illustrative example — not a live connector run". Use fictional names and content only. Follow the AetherLink colours and Jessy's visual hierarchy. Show one clear action and its result. Do not connect to accounts, use real work data, or imply that the animation proves a working integration. Propose the composition before building it.
```

## Keep work data out of design material

Use authorised live data only through approved connectors in the approved environment. Connector approval alone does not authorise processing with every model account.

Do not put real corporate or customer content into UI fixtures, screenshots, recordings, design reports or commits. Use synthetic content for recorded demonstrations and worst-case tests. Do not promise that local execution means local-only processing or zero retention.

Record live verification separately using only permitted, redacted evidence. An illustration, a green layout test and an actual connector run are different forms of evidence.
