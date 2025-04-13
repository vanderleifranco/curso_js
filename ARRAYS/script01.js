// Na ultima aula de arrays, aprendemos a criar arrays e a manipular os dados dentro deles.

const enderecos = [
    {
        rua: "Rua D",
        numero: 101,
        cidade: "Brasília",
    }
];
// Criando um array com 3 endereços
enderecos.push({
  rua: "Rua A",
  numero: 123,
  cidade: "São Paulo",
});
enderecos.push({
  rua: "Rua B",
  numero: 456,
  cidade: "Rio de Janeiro",
});
enderecos.push({
  rua: "Rua C",
  numero: 789,
  cidade: "Belo Horizonte",
});
//metodo forEach
// O forEach é um método de array que executa uma função para cada elemento do array
enderecos.forEach((endereco) => {
  console.log(`Rua: ${endereco.rua}, Número: ${endereco.numero}, Cidade: ${endereco.cidade}`);
  document.writeln(`Rua: ${endereco.rua}, Número: ${endereco.numero}, Cidade: ${endereco.cidade}<br>`);

}
);
let paragrafo = "";
for (let i = 0; i < enderecos.length; i++) {        
    paragrafo += `Rua: ${enderecos[i].rua}, Número: ${enderecos[i].numero}, Cidade: ${enderecos[i].cidade}<br>`;
    }       
document.getElementById("demo").innerHTML = paragrafo;

       





/*********************************************************************** 
// metodo for
for(let i = 0; i < enderecos.length; i++) {
  console.log(`Rua: ${enderecos[i].rua}, Número: ${enderecos[i].numero}, Cidade: ${enderecos[i].cidade}`);
}
console.log(paragrafo);
// metodo for in
for(let i in enderecos) {
  console.log(`Rua: ${enderecos[i].rua}, Número: ${enderecos[i].numero}, Cidade: ${enderecos[i].cidade}`);
}
// metodo for of    
for(let endereco of enderecos) {
  console.log(`Rua: ${endereco.rua}, Número: ${endereco.numero}, Cidade: ${endereco.cidade}`);
}
// metodo map       
const enderecosMap = enderecos.map((endereco) => {
  return {
    rua: endereco.rua,
    numero: endereco.numero,
    cidade: endereco.cidade,
  };
});
console.log(enderecosMap);
// metodo filter
const enderecosFilter = enderecos.filter((endereco) => {
  return endereco.cidade === "São Paulo";
});
console.log(enderecosFilter);
// metodo reduce
const enderecosReduce = enderecos.reduce((acc, endereco) => {
  return acc + endereco.numero;
}, 0);
console.log(enderecosReduce);
// metodo find
const enderecosFind = enderecos.find((endereco) => {
  return endereco.cidade === "São Paulo";
});         
console.log(enderecosFind);
// metodo findIndex
const enderecosFindIndex = enderecos.findIndex((endereco) => {
  return endereco.cidade === "São Paulo";
});
console.log(enderecosFindIndex);
// metodo some
const enderecosSome = enderecos.some((endereco) => {
  return endereco.cidade === "São Paulo";
});
console.log(enderecosSome);


******************************************************************/
