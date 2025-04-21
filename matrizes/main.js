/*  Dada uma matriz real A com m linhas e n colunas e um vetor real V com n elementos, determinar o produto de A por V 
    Caderno de exercicios MAC USP*/
//Criar a matriz A
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Criar o vetor V
const V = [
    [1, 2, 3],
    [4, 5, 6],
    [6, 8, 9]];
//Criar a matriz resultante R
const R = [];
//Criar a função para multiplicar a matriz A pelo vetor V

// https://www.todamateria.com.br/multiplicacao-de-matrizes/
// condicao numero de linhas de A == numero de colunas de V
if (A[0].length !== V.length) { 
    console.log("A quantidade de colunas de A deve ser igual a quantidade de linhas de V");
}else{
    for (let i = 0; i < A.length; i++) {
        R[i] = [];
        for (let j = 0; j < V.length; j++) {
            R[i][j]= 0;
        }
    }
}
// multiplicando a matriz A pelo vetor V
for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < V.length; j++) {
        for (let k = 0; k < A[0].length; k++) {
            R[i][j] += A[i][k] * V[k][j];
        }
        document.writeln( R[i][j]+"    ");
    }
    document.writeln("</br>");
}   
console.log(R);



