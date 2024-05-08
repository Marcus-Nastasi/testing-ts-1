"use strict";
function showHello() {
    const section = document.getElementById('secHeaderTop');
    const p = document.createElement('p');
    p.innerText = `Wellcome to the TS website, guest! Feel free to play.`;
    section === null || section === void 0 ? void 0 : section.appendChild(p);
}
;
window.onload = showHello;
//# sourceMappingURL=index.js.map