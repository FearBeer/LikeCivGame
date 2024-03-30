import { ResourcesENUM } from "../Resource/resource.js";

enum ColorsENUM {
  food = "green",
  stone = "grey",
  tree = "brown",
  metal = "yellow",
  water = "blue",
  default = "black",
}

type KeyOfResources = keyof typeof ResourcesENUM;
type KeyOfColors = keyof typeof ColorsENUM;
type AviableKeys = Extract<KeyOfColors, KeyOfResources>;

function randomResourceType() {
  const resources = Object.keys(ResourcesENUM) as KeyOfResources[];
  const aviableResources = resources.filter(
    (resource) => resource !== ResourcesENUM.coins
  ) as unknown as AviableKeys[];
  const index = Math.floor(Math.random() * aviableResources.length);
  console.log(aviableResources[index]);

  return aviableResources[index];
}

export function createRandomCell(currentIndex: number) {
  const divCell = document.createElement("div");
  divCell.classList.add("cell");
  divCell.dataset["index"] = currentIndex.toString();
  divCell.dataset["opened"] = "false";
  divCell.style.backgroundColor = ColorsENUM.default;
  return divCell;
}

export function changeCell(divCell: HTMLElement) {
  let resource: AviableKeys;
  let cellColor: ColorsENUM;
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
      divCell.style.backgroundColor = cellColor;
    } else {
      console.log(`Index: ${index} is opened? --- ${isOpened}`);
    }
  }
}
