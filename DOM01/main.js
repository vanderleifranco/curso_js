
var paragraphs = document.getElementsByTagName("p");

/*
paragraphs[0].innerHTML = "Olá, Mundo01!"; 
paragraphs[1].innerHTML = "Olá, Mundo02!";
paragraphs[2].innerHTML = "Olá, Mundo03!";
*/

// percorrendo com foreach
console.log(paragraphs.length)

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "Olá, Mundo com foreach" + (i + 1) + "!";
}   

// percorrendo com for
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "Olá, Mundo com for " + (i + 1) + "!";
}
