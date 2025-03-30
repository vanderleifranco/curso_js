
function areaTriangulo(base, altura) {
    let areaTriangulo;
    areaTriangulo = (base * altura) / 2;
    return areaTriangulo;
   
}

let base,altura;
base = 10;
altura = 5;
let arearecebida = areaTriangulo(base, altura);
console.log("A base do triângulo é: " + base);
console.log("A altura do triângulo é: " + altura);
console.log("A área do triângulo é: " + arearecebida);
// A base do triângulo é: 10
// A altura do triângulo é: 5
// A área do triângulo é: 25


