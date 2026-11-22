// =========================================================================
// ⚡ ONE-SHOT PARTY & FIREBASE ROOM CONFIG (Template — Clone into <slug>/)
// =========================================================================
// Load this BEFORE ../shared/cos_firebase_config.js and ../shared/cos_rpg_engine.js!
// Every one-shot gets its own isolated Firebase RTDB room under `campaigns/oneshot_<slug>`.

window.COS_CAMPAIGN_ROOM = "oneshot_template";

window.ONESHOT_PARTY = [
    { id: "hero1", name: "Hero 1", emoji: "⚔️", defCur: 20, defMax: 20, defAc: "16" },
    { id: "hero2", name: "Hero 2", emoji: "🔮", defCur: 16, defMax: 16, defAc: "14" },
    { id: "hero3", name: "Hero 3", emoji: "🏹", defCur: 18, defMax: 18, defAc: "15" }
];
