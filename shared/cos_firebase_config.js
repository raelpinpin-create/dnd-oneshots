// =========================================================================
// 🔥 SHARED ONE-SHOT VAULT — LIVE FIREBASE REALTIME DATABASE CONFIG
// =========================================================================
// Project: dnd-curse-of-strahd-467ea (Shared RTDB with per-one-shot room isolation)
// Database: https://dnd-curse-of-strahd-467ea-default-rtdb.asia-southeast1.firebasedatabase.app
// Each one-shot sets `window.COS_CAMPAIGN_ROOM = "oneshot_<slug>"` in its own
// `oneshot_config.js` BEFORE loading this file!

window.COS_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDduYuWQrhKN1SHat1RvGl92ClPSVRnL-w",
    authDomain: "dnd-curse-of-strahd-467ea.firebaseapp.com",
    databaseURL: "https://dnd-curse-of-strahd-467ea-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dnd-curse-of-strahd-467ea",
    storageBucket: "dnd-curse-of-strahd-467ea.firebasestorage.app",
    messagingSenderId: "696133405990",
    appId: "1:696133405990:web:04c460389e4400e2ccc5e7",
    measurementId: "G-NCMJ98GR6X"
};

window.COS_CAMPAIGN_ROOM = window.COS_CAMPAIGN_ROOM || "oneshot_sandbox";
