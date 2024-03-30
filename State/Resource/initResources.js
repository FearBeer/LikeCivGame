import { Resource, ResourcesENUM } from "./resource.js";
class CreateResource extends Resource {
    constructor(type, quantity) {
        super(type, quantity);
    }
}
let curResources;
let coins, food, stone, tree, metal, water;
coins = new CreateResource(ResourcesENUM.coins, 0);
food = new CreateResource(ResourcesENUM.food, 0);
stone = new CreateResource(ResourcesENUM.stone, 0);
tree = new CreateResource(ResourcesENUM.tree, 0);
metal = new CreateResource(ResourcesENUM.metal, 0);
water = new CreateResource(ResourcesENUM.water, 0);
if (localStorage.getItem("state") === null) {
    curResources = { coins, food, stone, tree, metal, water };
}
else {
    const fromLocalStore = JSON.parse(localStorage.getItem("state") || "{}");
    let coins, food, stone, tree, metal, water;
    coins = new CreateResource(ResourcesENUM.coins, fromLocalStore.coins._quantity);
    food = new CreateResource(ResourcesENUM.food, 0);
    stone = new CreateResource(ResourcesENUM.stone, 0);
    tree = new CreateResource(ResourcesENUM.tree, 0);
    metal = new CreateResource(ResourcesENUM.metal, 0);
    water = new CreateResource(ResourcesENUM.water, 0);
    curResources = { coins, food, stone, tree, metal, water };
}
export const resources = curResources;
