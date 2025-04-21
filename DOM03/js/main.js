
const botao =document.getElementById("button");
const paragrafo01 = document.getElementById("paragrafo01");


botao.addEventListener("click", function(){
    paragrafo01.innerHTML = "Você clicou no botão!";
    paragrafo01.style.color = "red";
    paragrafo01.style.fontSize = "30px";
});  


