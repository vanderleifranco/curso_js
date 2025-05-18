var Heroi = /** @class */ (function () {
    function Heroi() {
        this.vida = 100;
    }
    Heroi.prototype.tomarDano = function (dano) {
        this.vida -= dano;
    };
    return Heroi;
}());
var link = new Heroi();
console.log(link.vida);
