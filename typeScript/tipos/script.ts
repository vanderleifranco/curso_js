// String (texto)
let nome: string = "Maria";

// Number (números inteiros ou decimais)
let idade: number = 25;
let preco: number = 19.99;

// Boolean (verdadeiro/falso)
let ativo: boolean = true;

// Array (lista)
let frutas: string[] = ["maçã", "banana"]; // Array de strings
let numeros: number[] = [1, 2, 3];         // Array de números

// Tupla (array com tipos fixos)
let pessoa: [string, number] = ["João", 30]; // [nome, idade]

// Any (evite usar! - desativa a checagem de tipos)
let coisa: any = "pode ser qualquer coisa";
coisa = 42; // Não dá erro, mas perde os benefícios do TS.

console.log(nome, idade, preco, ativo, frutas, numeros, pessoa, coisa);