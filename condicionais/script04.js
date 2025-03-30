/*
Dizemos que um numero natural e triangular se ele e produto de tres numeros
naturais conseutivos.
Exemplo: 120 e triangular, pois 4:5:6 = 120.
Dado um inteiro nao-negativo n, vericar se n e triangular
*/
function triangular(n) {        
    let i = 1;
    let triangular = 0;
    while (triangular < n) {
        triangular = i * (i + 1) * (i + 2) / 6;
        i++;
    }
    return triangular === n;
}
// Testando a função triangular             
let n = 120;
console.log("O número " + n + " é triangular? " + triangular(n));
// O número 120 é triangular? true
// Testando a função triangular com outro número
n = 121;
console.log("O número " + n + " é triangular? " + triangular(n));
// O número 121 é triangular? false
// Testando a função triangular com outro número
n = 122;        
console.log("O número " + n + " é triangular? " + triangular(n));
// O número 122 é triangular? false
// Testando a função triangular com outro número
n = 123;    
console.log("O número " + n + " é triangular? " + triangular(n));
// O número 123 é triangular? false
// Testando a função triangular com outro número
n = 124;
console.log("O número " + n + " é triangular? " + triangular(n));