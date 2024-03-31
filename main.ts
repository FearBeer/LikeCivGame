import { changeCell, createCell } from "./State/Cell/Сell.js";
import { Resource, ResourcesENUM } from "./State/Resource/resource.js";
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

gamefieldEl?.style.setProperty("--columns", COLUMNS.toString());

for (let i = 0; i < COLUMNS; i++) {
  for (let j = 0; j < ROWS; j++) {
    const divCell = createCell(currentIndex);
    currentIndex++;
    gamefieldEl?.append(divCell);
  }
}
const stateResources = initialState.resources;

console.log(localStorage);

renderResourceValue("Монеты: ", coinsEl, stateResources.coins);

function renderResourceValue(
  text: string,
  element: HTMLElement | null,
  type: Resource
) {
  element ? (element.innerText = text + type.quantity) : null;
}

let count = 0;

function ulClick(event: { [x: string]: any; target: any }) {
  changeCell(event.target);
  // запись события в журнал
  renderResourceValue("Монеты: ", coinsEl, stateResources.coins);
  const p = document.createElement("p");
  count++;
  p.innerText = event.target + count;
  journalEl?.prepend(p);
}

function saveState() {
  localStorage.setItem("state", JSON.stringify(stateResources));
  console.log(localStorage.getItem("state"));
}

function resetAndReload() {
  location.reload();
  localStorage.clear();
}

gamefieldEl?.addEventListener("click", ulClick);

saveEl?.addEventListener("click", saveState);

resetButton?.addEventListener("click", resetAndReload);

// console.log(initialState.resources.coins.quantity);
