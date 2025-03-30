
let pesoInp, alturaInp;
pesoInp = 70;
alturaInp = 1.75;
console.log("O peso é: " + pesoInp);
console.log("A altura é: " + alturaInp);
// console.log("O IMC é: " + imc(pesoInp, alturaInp));
// O peso é: 70
// A altura é: 1.75
// O IMC é: 22.857142857142858
// O peso é: 70


console.log("O IMC é: " + imc(pesoInp, alturaInp));




function imc(peso, altura) {
    let imc;
    imc = peso / (altura * altura);
    return imc;
}