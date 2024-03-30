export var ResourcesENUM;
(function (ResourcesENUM) {
    ResourcesENUM["coins"] = "coins";
    ResourcesENUM["food"] = "food";
    ResourcesENUM["tree"] = "tree";
    ResourcesENUM["stone"] = "stone";
    ResourcesENUM["metal"] = "metal";
    ResourcesENUM["water"] = "water";
})(ResourcesENUM || (ResourcesENUM = {}));
export class Resource {
    constructor(type, quantity) {
        this._type = type;
        this._quantity = quantity;
    }
    get type() {
        return this._type;
    }
    get quantity() {
        return this._quantity;
    }
    increaseQuantity(value) {
        return (this._quantity += value);
    }
    decreaseQuantity(value) {
        this._quantity -= value;
        // if (this._quantity <= 0) {
        //   return (this._quantity = 0);
        // }
        return this._quantity;
    }
}
