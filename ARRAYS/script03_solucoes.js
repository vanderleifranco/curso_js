//Dado um número inteiro positivo, determine a sua decomposição em fatores primos calculando também a multiplicidade de cada fator.

document.writeln("<h2>Decomposição em fatores primos n=60</h2>");
let numero = 60;
let fatores = [];

for (let i = 2; i <= numero; i++) {
    while (numero % i === 0) {
        fatores.push(i);
        numero /= i;
        
    }
}
fatores.forEach((fator) => {
    console.log(fator);
    document.writeln(fator + "<br>");
}
);
// console.log(fatores);
