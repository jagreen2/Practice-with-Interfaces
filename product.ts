interface IProduct {
    name: string;
    price: number;
}

class Fruit implements IProduct {
    constructor(public name: string, public price: number, public color: string) { }
}

class Telephone implements IProduct {
    constructor(public name: string, public price: number, public loudness: string) { }
}

function showInventory(product: IProduct) {
    console.log(product.name);
    console.log(product.price);
}

let orange = new Fruit('orange', 2, 'orange');
let banana = new Fruit('banana', 1, 'yellow');
let strawberry = new Fruit('strawberry', 4, 'red');
let iphone = new Telephone('iphone', 600, 'loud');
let samsung = new Telephone('samsung', 500, 'veryloud');

let inventory = [orange, banana, strawberry, iphone, samsung];

for (var i = 0, i<inventory.length, i++){
  result = showInventory(inventory[i]);
  console.log(result);
}
