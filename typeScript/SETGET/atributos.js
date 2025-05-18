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
    function Heroi(nome) {
        this._vida = 100;
        this.nome = nome;
    }
    Object.defineProperty(Heroi.prototype, "qtVida", {
        get: function () {
            return this._vida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heroi.prototype, "nomeHeroi", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    return Heroi;
}());
var espadaHeroi = /** @class */ (function (_super) {
    __extends(espadaHeroi, _super);
    function espadaHeroi(nome) {
        var _this = _super.call(this, nome) || this;
        _this._tipo = "Espada comum";
        return _this;
    }
    Object.defineProperty(espadaHeroi.prototype, "_vida", {
        set: function (valor) {
            this._vida += valor;
        },
        enumerable: false,
        configurable: true
    });
    return espadaHeroi;
}(Heroi));
var link = new espadaHeroi("Link");
console.log(link._vida(10));
