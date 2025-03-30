/**
 * Diferença entre var, let e const:
 * 
 * - `var`: É uma forma mais antiga de declarar variáveis no JavaScript. 
 *   Possui escopo de função (não de bloco) e pode ser redeclarada no mesmo escopo.
 *   Além disso, variáveis declaradas com `var` são "hoisted" (elevadas) para o topo do escopo,
 *   mas sem inicialização, o que pode levar a comportamentos inesperados.
 * 
 * - `let`: Introduzido no ES6, possui escopo de bloco, o que significa que a variável só é acessível
 *   dentro do bloco onde foi declarada. Não pode ser redeclarada no mesmo escopo, mas pode ser reatribuída.
 * 
 * - `const`: Também introduzido no ES6, possui escopo de bloco como `let`. 
 *   No entanto, uma variável declarada com `const` não pode ser reatribuída após sua inicialização.
 *   É usada para valores que não devem mudar, mas isso não impede a mutação de objetos ou arrays.
 */

// numero pi
const PI = 3.14159;
console.log(PI);

// let pode ser reatribuída
let numero = 10;
console.log(numero);

// var pode ser redeclarada
var num = 20;
console.log(num);

// logica varariavel com let
if (true) {
  console.log(numero);
}

// erro: tentando reatribuir um valor a uma constante
//PI = 3.14;
//console.log(PI);

// let string 
let nome = 'Lucas';
console.log('nome '+nome);




