import { Resource, ResourcesENUM } from "./resource.js";

class CreateResource extends Resource {
  constructor(type: ResourcesENUM, quantity: number) {
    super(type, quantity);
  }
}
let curResources: IResources;

let coins, food, stone, tree, metal, water: CreateResource;
coins = new CreateResource(ResourcesENUM.coins, 0);
food = new CreateResource(ResourcesENUM.food, 0);
stone = new CreateResource(ResourcesENUM.stone, 0);
tree = new CreateResource(ResourcesENUM.tree, 0);
metal = new CreateResource(ResourcesENUM.metal, 0);
water = new CreateResource(ResourcesENUM.water, 0);

if (localStorage.getItem("resourcesState") === null) {
  curResources = { coins, food, stone, tree, metal, water };
} else {
  const fromLocalStore = JSON.parse(
    localStorage.getItem("resourcesState") || "{}"
  );
  let coins, food, stone, tree, metal, water: CreateResource;
  coins = new CreateResource(
    ResourcesENUM.coins,
    fromLocalStore.coins._quantity
  );
  food = new CreateResource(ResourcesENUM.food, 0);
  stone = new CreateResource(ResourcesENUM.stone, 0);
  tree = new CreateResource(ResourcesENUM.tree, 0);
  metal = new CreateResource(ResourcesENUM.metal, 0);
  water = new CreateResource(ResourcesENUM.water, 0);
  curResources = { coins, food, stone, tree, metal, water };
}

export interface IResources {
  coins: CreateResource;
  food: CreateResource;
  stone: CreateResource;
  tree: CreateResource;
  metal: CreateResource;
  water: CreateResource;
}

export const resources = curResources;
