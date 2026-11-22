# ⚡ D&D 5e One-Shot Vault (`dnd-oneshots`)

Lightweight, modular repository for running D&D 5e one-shots with **on-the-fly interactive character sheets**, **shared RPG Engine**, **v3.0 Matte-Charcoal Theme**, and **isolated live Firebase rooms** without duplicating 12,000-line engine files.

## 📂 Structure
* `shared/` — Single shared copy of `dnd_rpg_engine.js` (party-roster-agnostic, exposing `window.DND_RPG` & `window.COS_RPG`), `dnd_rpg_engine.css`, `dnd_sheet_theme.css`, `dnd_firebase_config.js`, and Firebase rules.
* `_template/` — Starter kit (`oneshot_config.js`, `00_ONESHOT_BRIEF.md`, `index.html`) cloned when starting a new one-shot.
* `<oneshot-slug>/` — Active one-shot folders (each isolated via `window.COS_CAMPAIGN_ROOM = "oneshot_<slug>"`). Delete or move to `archive/` when finished!
* `archive/` — Preserved legacy sheets and completed one-shots.
* `index.html` — Live GitHub Pages One-Shot Vault Launcher (`https://raelpinpin-create.github.io/dnd-oneshots/`).
