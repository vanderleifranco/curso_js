//Polimorfismo Abstração Interfaces 
// ABSTRACAO
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
var FormaGeometrica = /** @class */ (function () {
    function FormaGeometrica() {
    }
    FormaGeometrica.prototype.descricao = function () {
        return "Forma Geometrica";
    };
    return FormaGeometrica;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    Circulo.prototype.desenhar = function () {
        console.log("desenhando um circulo !");
    };
    Circulo.prototype.rotacionar = function (graus) {
        console.log("rotacionar ".concat(graus));
    };
    return Circulo;
}(FormaGeometrica));
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.desenhar = function () {
        console.log(" desenhando um quadrado");
    };
    Quadrado.prototype.calcularArea = function () {
        return Math.pow(this.lado, 2);
    };
    return Quadrado;
}(FormaGeometrica));
var formas = [
    new Circulo(5),
    new Quadrado(10)
];
formas.forEach(function (form) {
    console.log("area" + form.calcularArea());
});
