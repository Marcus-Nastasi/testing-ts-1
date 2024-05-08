"use strict";
function showHello() {
    const section = document.getElementById('secHeaderTop');
    const p = document.createElement('p');
    const wellcome = `Wellcome to the TS website, guest! Feel free to play.`;
    p.innerText = wellcome;
    section === null || section === void 0 ? void 0 : section.appendChild(p);
}
;
window.onload = () => setTimeout(() => showHello(), 2000);
//# sourceMappingURL=index.js.map