import { ResourcesENUM } from "../Resource/resource.js";
var ColorsENUM;
(function (ColorsENUM) {
    ColorsENUM["food"] = "green";
    ColorsENUM["stone"] = "grey";
    ColorsENUM["tree"] = "brown";
    ColorsENUM["metal"] = "yellow";
    ColorsENUM["water"] = "blue";
    ColorsENUM["default"] = "black";
})(ColorsENUM || (ColorsENUM = {}));
function randomResourceType() {
    const resources = Object.keys(ResourcesENUM);
    const aviableResources = resources.filter((resource) => resource !== ResourcesENUM.coins);
    const index = Math.floor(Math.random() * aviableResources.length);
    console.log(aviableResources[index]);
    return aviableResources[index];
}
export function createCell(currentIndex) {
    const divCell = document.createElement("div");
    divCell.classList.add("cell");
    divCell.dataset["index"] = currentIndex.toString();
    divCell.dataset["opened"] = "false";
    divCell.style.backgroundColor = ColorsENUM.default;
    return divCell;
}
export function changeCell(divCell) {
    let resource;
    let cellColor;
    resource = randomResourceType();
    cellColor = ColorsENUM[ResourcesENUM[resource]];
    const index = divCell.dataset.index;
    let isOpened = divCell.dataset.opened === "false" ? false : true;
    console.log(cellColor);
    if (index) {
        if (!isOpened) {
            console.log(`Index: ${index} is opened? --- ${isOpened}`);
            // open cell
            isOpened = true;
            divCell.dataset.opened = isOpened.toString();
            // change color
            divCell.style.background = `radial-gradient(${cellColor} 50%, ${ColorsENUM.default} 100%)`;
            const cellState = {
                index,
                cellColor,
            };
            localStorage.setItem(`cell-${index}`, JSON.stringify(cellState));
            console.log(localStorage.getItem(`cell-${index}`));
        }
        else {
            console.log(`Index: ${index} is opened? --- ${isOpened}`);
        }
    }
}
function setCellState() { }
