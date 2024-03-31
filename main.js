import { changeCell, createCell } from "./State/Cell/Сell.js";
import { initialState } from "./State/initState.js";
console.log("main");
const COLUMNS = 10;
const ROWS = 10;
let currentIndex = 0;
// function randomResourceType() {
//   const index = Math.floor(Math.random() * Object.keys(ResourcesENUM).length);
//   return Object.keys(ResourcesENUM)[index];
// }
const coinsEl = document.getElementById("coins");
const gamefieldEl = document.getElementById("gamefield");
const journalEl = document.getElementById("journal__content");
const saveEl = document.getElementById("save");
const resetButton = document.getElementById("reset");
gamefieldEl === null || gamefieldEl === void 0 ? void 0 : gamefieldEl.style.setProperty("--columns", COLUMNS.toString());
for (let i = 0; i < COLUMNS; i++) {
    for (let j = 0; j < ROWS; j++) {
        const divCell = createCell(currentIndex);
        currentIndex++;
        gamefieldEl === null || gamefieldEl === void 0 ? void 0 : gamefieldEl.append(divCell);
    }
}
const stateResources = initialState.resources;
console.log(localStorage);
renderResourceValue("Монеты: ", coinsEl, stateResources.coins);
function renderResourceValue(text, element, type) {
    element ? (element.innerText = text + type.quantity) : null;
}
let count = 0;
function ulClick(event) {
    changeCell(event.target);
    // запись события в журнал
    renderResourceValue("Монеты: ", coinsEl, stateResources.coins);
    const p = document.createElement("p");
    count++;
    p.innerText = event.target + count;
    journalEl === null || journalEl === void 0 ? void 0 : journalEl.prepend(p);
}
function saveState() {
    localStorage.setItem("state", JSON.stringify(stateResources));
    console.log(localStorage.getItem("state"));
}
function resetAndReload() {
    location.reload();
    localStorage.clear();
    console.log("reset");
}
gamefieldEl === null || gamefieldEl === void 0 ? void 0 : gamefieldEl.addEventListener("click", ulClick);
saveEl === null || saveEl === void 0 ? void 0 : saveEl.addEventListener("click", saveState);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", resetAndReload);
// console.log(initialState.resources.coins.quantity);
