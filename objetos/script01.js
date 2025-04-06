var carro = {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2018,
    cor: "preto",

    ligar: function() {
        console.log("O carro está ligado.");
    },
    desligar: function() {
        console.log("O carro está desligado.");
    },
    acelerar: function() {
        console.log("O carro está acelerando.");
    },
    frear: function() {
        console.log("O carro está freando.");
    }
}

console.log(carro.marca); // Ford
carro.marca = "Chevrolet";
console.log(carro.marca); // Chevrolet

carro.ligar(); // O carro está ligado.
carro.acelerar(); // O carro está acelerando.
carro.frear(); // O carro está freando.
carro.desligar(); // O carro está desligado.
// console.log(carro.ligar()); // O carro está ligado.
// console.log(carro.acelerar()); // O carro está acelerando.
// console.log(carro.frear()); // O carro está freando.
// console.log(carro.desligar()); // O carro está desligado.