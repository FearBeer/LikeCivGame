export enum ResourcesENUM {
  coins = "coins",
  food = "food",
  tree = "tree",
  stone = "stone",
  metal = "metal",
  water = "water",
}

export abstract class Resource {
  private _type: ResourcesENUM;
  private _quantity: number;

  constructor(type: ResourcesENUM, quantity: number) {
    this._type = type;
    this._quantity = quantity;
  }

  get type(): ResourcesENUM {
    return this._type;
  }

  get quantity(): number {
    return this._quantity;
  }

  increaseQuantity(value: number) {
    return (this._quantity += value);
  }

  decreaseQuantity(value: number) {
    this._quantity -= value;
    // if (this._quantity <= 0) {
    //   return (this._quantity = 0);
    // }
    return this._quantity;
  }
}
