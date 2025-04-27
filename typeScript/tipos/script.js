// String (texto)
var nome = "Maria";
// Number (números inteiros ou decimais)
var idade = 25;
var preco = 19.99;
// Boolean (verdadeiro/falso)
var ativo = true;
// Array (lista)
var frutas = ["maçã", "banana"]; // Array de strings
var numeros = [1, 2, 3]; // Array de números
// Tupla (array com tipos fixos)
var pessoa = ["João", 30]; // [nome, idade]
// Any (evite usar! - desativa a checagem de tipos)
var coisa = "pode ser qualquer coisa";
coisa = 42; // Não dá erro, mas perde os benefícios do TS.
console.log(nome, idade, preco, ativo, frutas, numeros, pessoa, coisa);
