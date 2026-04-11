// ==UserScript==
// @name         Bypass UptoLink (FAST FIX)
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  No delay + GM working
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @connect      cdn.jsdelivr.net
// @connect      raw.githubusercontent.com
// @connect      *
// @run-at       document-end
// ==/UserScript==

(function() {
'use strict';

// ⚡ CDN nhanh
const URL_FAST = "https://cdn.jsdelivr.net/gh/Huy7684/Uptolink/toolgoc.js";

// 🐢 fallback
const URL_FALLBACK = "https://raw.githubusercontent.com/Huy7684/Uptolink/refs/heads/main/toolgoc.js";

// 🚀 load bằng GM (GIỮ QUYỀN)
function load(url){
    GM_xmlhttpRequest({
        method: "GET",
        url: url,
        onload: function(res){
            try{
                console.log("✅ Loaded:", url);

                // 🔥 chạy trong context Tampermonkey
                eval(res.responseText);

            }catch(e){
                console.error("EXEC ERROR:", e);
            }
        },
        onerror: function(){
            console.log("⚠️ fail → fallback...");
            if(url !== URL_FALLBACK){
                load(URL_FALLBACK);
            }
        }
    });
}

// chạy ngay (không delay)
load(URL_FAST);

})();
