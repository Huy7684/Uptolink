// ==UserScript==
// @name         Bypass UptoLink (FAST)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  No delay version
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @connect      uptolink.one
// @connect      raw.githubusercontent.com
// @connect      api.github.com
// @connect      *
// @run-at       document-end
// ==/UserScript==

(function() {
'use strict';

// ⚡ URL nhanh (CDN)
const URL_FAST = "https://cdn.jsdelivr.net/gh/Huy7684/Uptolink/toolgoc.js";

// 🐢 fallback (GitHub RAW)
const URL_FALLBACK = "https://raw.githubusercontent.com/Huy7684/Uptolink/refs/heads/main/toolgoc.js";

// 🚀 load script async (KHÔNG delay UI)
function loadScript(url){
    const s = document.createElement("script");
    s.src = url;
    s.async = true;

    s.onload = () => {
        console.log("✅ Tool loaded:", url);
    };

    s.onerror = () => {
        console.log("⚠️ CDN fail → fallback...");
        if(url !== URL_FALLBACK){
            loadScript(URL_FALLBACK);
        }
    };

    document.head.appendChild(s);
}

// 🔥 chạy ngay (không chờ)
loadScript(URL_FAST);

})();
