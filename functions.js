"use strict";

(function(global) {
    global.encode = function(targetId) {
        const u = ["m","a","g","u","r","o",".","q","u","i","z"].join("");
        const d = ["g","m","a","i","l",".","c","o","m"].join("");
        const m = u + "@" + d;
        // エンコードする関数
        function encodeToHtmlEntities(str) {
            let encoded = "";
            for (let i = 0; i < str.length; i++) {
                encoded += "&#" + str.charCodeAt(i) + ";";
            }
            return encoded;
        }
        // エンコード済みの文字列を作成
        const encodeText = encodeToHtmlEntities(m);
        // 対象の要素に 文字列を挿入
        const target = document.getElementById(targetId);
        if (target) {
            target.innerHTML = encodeText;
        }
    };
})(window);
