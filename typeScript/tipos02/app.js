// app.ts
var botao = document.getElementById("botao");
var saida = document.getElementById("saida");
// Tipos básicos sendo usados:
var mensagem = "Você clicou no botão!";
var contador = 0;
botao.addEventListener("click", function () {
    contador++;
    saida.textContent = "".concat(mensagem, " (").concat(contador, " vezes)"); // Atualiza a saída
});
