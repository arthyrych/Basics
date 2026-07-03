# CLAUDE.md

## What repo is

- Repo is study notes for QA Automation (JS/TS, Playwright) interview. 
- No app. No build. No lint. No tests.
- `general/` = theory notes in md. `00_general.md` = list of all topics.
- `js/` = runnable JS examples, numbered in learning order.
- `js/es6/` and `js/js_concepts/` = deeper examples, same topics.
- File names: snake_case, number prefix.

## How run

- Run example: `node js/<file>.js`
- All files ES modules (`"type": "module"`). `import`/`export` work.

## Rules

- Brevity: Write short. Plain words, exact tech terms. No intros/outros. Bullets/tables when they help. Expand only when asked.
- Accuracy: No guesses as facts. Mark facts vs assumptions vs opinions. Verify claims (web search) or flag as unverified.
- Assumptions: State them and proceed. Ask only if answer would change the outcome.
- Corrections: Tell me directly if I am wrong.
- Priority when rules conflict: Accuracy > Brevity > Asking.
- Code comments: short, show expected output: `console.log(a) // 1`
- Files: keep number prefix in names. Order matter.
- Lines: max 140 chars, in code and notes.
- Style: use `-`, not `—`. Use `""`, not `''`.
- Git: no stage, no commit, no push. User does after review.