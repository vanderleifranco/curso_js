// ARRAY / VETORES

var videogames = ['PS5', 'XBOX', 'SWITCH2', 'PC', '3DS'];

/*
 console.log(videogames[0]); // PS5
 console.log(videogames[1]); // XBOX
 console.log(videogames[2]); // SWITCH2       
 videogames[3] = 'PC';
*/

console.log("ultimo elemento da lista = ",videogames.length); // 4

for (var i = 0; i < videogames.length; i++) {
    console.log(videogames[i]); // PS5 XBOX SWITCH2 PC 3DS
}

videogames.pop(); // remove o último elemento do array
console.log("ultimo elemento da lista = ",videogames.length); // 4
for (var i = 0; i < videogames.length; i++) {
    console.log(videogames[i]); // PS5 XBOX SWITCH2 PC 3DS
}

videogames.push('PS4'); // adiciona um novo elemento ao array
console.log("ultimo elemento da lista = ",videogames.length); 
for (var i = 0; i < videogames.length; i++) {
    console.log(videogames[i]); 
}





