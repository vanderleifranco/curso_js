var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Heroi = /** @class */ (function () {
    function Heroi() {
        this.energia = 60;
    }
    Heroi.prototype.renovarEnergia = function () {
        this.energia = 60;
    };
    return Heroi;
}());
var Arqueiro = /** @class */ (function (_super) {
    __extends(Arqueiro, _super);
    function Arqueiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arqueiro.prototype.usarFlecha = function () {
        this.energia -= 10;
        console.log(this.energia);
    };
    return Arqueiro;
}(Heroi));
var arqueiroLink = new Arqueiro();
arqueiroLink.usarFlecha();
