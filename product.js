var Fruit = (function () {
    function Fruit(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    return Fruit;
}());
var Telephone = (function () {
    function Telephone(name, price, loudness) {
        this.name = name;
        this.price = price;
        this.loudness = loudness;
    }
    return Telephone;
}());
function showInventory(product) {
    console.log(product.name);
    console.log(product.price);
}
var orange = new Fruit('orange', 2, 'orange');
var banana = new Fruit('banana', 1, 'yellow');
var strawberry = new Fruit('strawberry', 4, 'red');
var iphone = new Telephone('iphone', 600, 'loud');
var samsung = new Telephone('samsung', 500, 'veryloud');
var inventory = [orange, banana, strawberry, iphone, samsung];
for (var i = 0, i = , i = ++, _a = (void 0).result, result = _a === void 0 ? showInventory(inventory[i]) : _a; console.log(result); )
    ;
//# sourceMappingURL=product.js.map