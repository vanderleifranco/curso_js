// app.ts
const botao = document.getElementById("botao") as HTMLButtonElement;
const saida = document.getElementById("saida") as HTMLDivElement;

// Tipos básicos sendo usados:
const mensagem: string = "Você clicou no botão!";
const contador: number = 0;

botao.addEventListener("click", () => {
    contador++;
    saida.textContent = `${mensagem} (${contador} vezes)`; // Atualiza a saída
});