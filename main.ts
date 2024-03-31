import { changeCell, createCell, ColorsENUM } from "./State/Cell/Сell.js";
import { Resource, ResourcesENUM } from "./State/Resource/resource.js";
import { initialState } from "./State/initState.js";
console.log("main");

const COLUMNS = 10;
const ROWS = 10;
// для установки индексов клеток в игровом поле
let currentIndex = 0;

const coinsEl = document.getElementById("coins");
const gamefieldEl = document.getElementById("gamefield");
const journalEl = document.getElementById("journal__content");
const saveEl = document.getElementById("save");
const resetButton = document.getElementById("reset");

gamefieldEl?.style.setProperty("--columns", COLUMNS.toString());

// делаем мэп, чтобы не лазить по всему массиву, когда нужно поменять
// состояние клетки
const gameMap = new Map();
// Рисуем изначальное игровое поле и заполняем gameMap
for (let i = 0; i < COLUMNS; i++) {
  for (let j = 0; j < ROWS; j++) {
    const divCell = createCell(currentIndex);
    currentIndex++;
    // заполняем мэп
    gameMap.set(`cell-${divCell.dataset.index}`, divCell);
    gamefieldEl?.append(divCell);
  }
}

const stateResources = initialState.resources;

for (let i = 0; i < COLUMNS * ROWS; i++) {
  const openedCell = localStorage.getItem(`cell-${i}`);
  // если есть в локалсторе клетка, то говорим:
  if (openedCell) {
    const currentColor = JSON.parse(openedCell).cellColor;
    const currentCell = gameMap.get(`cell-${i}`);
    // она уже открыта и
    currentCell.dataset.opened = "true";
    // меняем фон
    currentCell.style.background = `radial-gradient(${currentColor} 50%, ${ColorsENUM.default} 100%)`;
  }
}

renderResourceValue("Монеты: ", coinsEl, stateResources.coins);

function renderResourceValue(
  text: string,
  element: HTMLElement | null,
  type: Resource
) {
  element ? (element.innerText = text + type.quantity) : null;
}

let count = 0;

function ulClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  changeCell(target);
  // запись события в журнал
  renderResourceValue("Монеты: ", coinsEl, stateResources.coins);
  const p = document.createElement("p");
  count++;
  p.innerText = count.toString();
  journalEl?.prepend(p);
}

function saveState() {
  localStorage.setItem("resourcesState", JSON.stringify(stateResources));
  console.log(localStorage);
}

function resetAndReload() {
  location.reload();
  localStorage.clear();
}

gamefieldEl?.addEventListener("click", ulClick);

saveEl?.addEventListener("click", saveState);

resetButton?.addEventListener("click", resetAndReload);
