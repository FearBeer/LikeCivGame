import { changeCell, createCell, ColorsENUM } from "./State/Cell/Сell.js";
import { initialState } from "./State/initState.js";
console.log("main");
const COLUMNS = 10;
const ROWS = 10;
let currentIndex = 0;
const coinsEl = document.getElementById("coins");
const gamefieldEl = document.getElementById("gamefield");
const journalEl = document.getElementById("journal__content");
const saveEl = document.getElementById("save");
const resetButton = document.getElementById("reset");
gamefieldEl === null || gamefieldEl === void 0 ? void 0 : gamefieldEl.style.setProperty("--columns", COLUMNS.toString());
const gameMap = new Map();
for (let i = 0; i < COLUMNS; i++) {
    for (let j = 0; j < ROWS; j++) {
        const divCell = createCell(currentIndex);
        currentIndex++;
        gameMap.set(`cell-${divCell.dataset.index}`, divCell);
        gamefieldEl === null || gamefieldEl === void 0 ? void 0 : gamefieldEl.append(divCell);
    }
}
const stateResources = initialState.resources;
for (let i = 0; i < COLUMNS * ROWS; i++) {
    const openedCell = localStorage.getItem(`cell-${i}`);
    if (openedCell) {
        gameMap.get(`cell-${i}`).dataset.opened = "true";
        gameMap.get(`cell-${i}`).style.background = `radial-gradient(${JSON.parse(openedCell).cellColor} 50%, ${ColorsENUM.default} 100%)`;
    }
}
renderResourceValue("Монеты: ", coinsEl, stateResources.coins);
function renderResourceValue(text, element, type) {
    element ? (element.innerText = text + type.quantity) : null;
}
let count = 0;
function ulClick(event) {
    const target = event.target;
    changeCell(target);
    // запись события в журнал
    renderResourceValue("Монеты: ", coinsEl, stateResources.coins);
    const p = document.createElement("p");
    count++;
    p.innerText = count.toString();
    journalEl === null || journalEl === void 0 ? void 0 : journalEl.prepend(p);
}
function saveState() {
    localStorage.setItem("resourcesState", JSON.stringify(stateResources));
    console.log(localStorage);
}
function resetAndReload() {
    location.reload();
    localStorage.clear();
}
gamefieldEl === null || gamefieldEl === void 0 ? void 0 : gamefieldEl.addEventListener("click", ulClick);
saveEl === null || saveEl === void 0 ? void 0 : saveEl.addEventListener("click", saveState);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", resetAndReload);
