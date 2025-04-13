const games = [["Zelda", "Mario", "Metroid"], ["Halo", "Gears of War", "Forza"]];
const [nintendo, xbox] = games;
console.log(nintendo); // ["Zelda", "Mario", "Metroid"]
console.log(xbox); // ["Halo", "Gears of War", "Forza"]
console.log(nintendo[0]); // "Zelda"
console.log(nintendo[1]); // "Mario"
console.log(nintendo[2]); // "Metroid"      

// Desestruturação de arrays
// A desestruturação de arrays é uma maneira de extrair valores de um array e atribuí-los a variáveis individuais.
// Isso pode ser feito usando a sintaxe de colchetes [].
// Por exemplo, se tivermos um array com três valores, podemos desestruturar esses valores em três variáveis separadas:
const numeros = [1, 2, 3];

games.forEach((game) => console.log(game));

