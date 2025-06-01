/********************************
 Crie uma interface chamada Pet com os seguintes métodos abstratos:

comer(): retorna uma string descrevendo como o pet come

emitirSom(): retorna uma string com o som que o pet faz

brincar(): retorna uma string descrevendo como o pet brinca

Implemente três classes que representam tipos diferentes de pets
(por exemplo: Cachorro, Gato, Passaro) que implementam a interface Pet.
Cada classe deve ter suas próprias implementações dos métodos, refletindo comportamentos específicos para cada tipo de animal.

Crie uma classe LojaDePets que:

Mantém uma lista de pets (array)

Tem um método adicionarPet() para adicionar novos pets à loja

Tem um método interagirComPets() que percorre todos os pets da loja e executa seus métodos comer(), emitirSom() e brincar(), mostrando os resultados no console

Demonstre o polimorfismo criando instâncias de diferentes pets, adicionando-os à loja e chamando o método interagirComPets().
 *****************************************************************************/
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
// abstracao 
var Pet = /** @class */ (function () {
    function Pet(nome) {
        this.nome = nome;
    }
    //concreta
    Pet.prototype.brincar = function () {
        return "feliz";
    };
    return Pet;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(raca, nome) {
        return _super.call(this, nome) || this;
    }
    Cachorro.prototype.comer = function () {
        console.log("hora de comer carninha");
    };
    Cachorro.prototype.emitirSom = function () {
        console.log("au au");
    };
    Cachorro.prototype.dormir = function () {
        console.log("soninho");
    };
    return Cachorro;
}(Pet));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(raca, nome) {
        return _super.call(this, nome) || this;
    }
    Gato.prototype.comer = function () {
        console.log("hora de comer peixinho");
    };
    Gato.prototype.emitirSom = function () {
        console.log("miau miuau");
    };
    Gato.prototype.dormir = function () {
        console.log("soninho");
    };
    return Gato;
}(Pet));
// implementando o polimorfismo
var LojaDePets = /** @class */ (function () {
    function LojaDePets() {
        this.pets = [];
    }
    LojaDePets.prototype.adicionarPet = function (animal) {
        this.pets.push(animal);
        console.log("adicionado com sucesso");
    };
    LojaDePets.prototype.interacaoComPet = function (animal) {
        for (var i = 0; i < this.pets.length; i++) {
            if (this.pets[i].nome === animal) {
                console.log(this.pets[i].comer());
                console.log(this.pets[i].emitirSom());
                console.log("---");
            }
        }
    };
    LojaDePets.prototype.interagirComPetsTodos = function () {
        console.log("\n=== Interagindo com todos os pets da loja ===");
        this.pets.forEach(function (pet) {
            console.log(pet.comer());
            console.log(pet.emitirSom());
            console.log("---");
        });
    };
    return LojaDePets;
}());
var Loja = new LojaDePets();
Loja.adicionarPet(new Cachorro("vira-lata", "lulu"));
Loja.adicionarPet(new Gato("vira-lata", "mimi"));
Loja.interacaoComPet("lulu");
Loja.interagirComPetsTodos();
