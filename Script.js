// ==UserScript==
// @name         HuyDz Bypass
// @version      36.36
// @description  HuyDz
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      raw.githubusercontent.com
// @connect      uptolink.one
// @connect      api.github.com
// @run-at       document-end
// @icon         https://avatars.githubusercontent.com/u/112377723?v=4
// ==/UserScript==

GM_xmlhttpRequest({
    method: "GET",
    url: "https://raw.githubusercontent.com/Huy7684/Uptolink/refs/heads/main/Tool.js?t=" + Date.now(),
    onload: res => eval(res.responseText)
});
