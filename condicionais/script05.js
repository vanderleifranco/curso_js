// ternarios 

/*
let idade = 18;
let podeDirigir = (idade >= 18) ? "pode dirigir" : "não pode dirigir";
console.log(podeDirigir); // pode dirigir
idade = 17;
podeDirigir = (idade >= 18) ? "pode dirigir" : "não pode dirigir";
console.log(podeDirigir); // não pode dirigir
idade = 18;
podeDirigir = (idade >= 18) ? "pode dirigir" : "não pode dirigir";
console.log(podeDirigir); // pode dirigir
*/

let aniverario = 18;
let entrada = "permetida";

if (aniverario >= 18) {
    entrada = "permetida";
}
else {
    entrada = "não permitida";
}
console.log(entrada); // entrada permitida

entrada = (aniverario <= 17) ? "permetida" : "não permitida";
console.log(entrada); // entrada permitida;
