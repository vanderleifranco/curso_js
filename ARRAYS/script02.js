const games = [["Zelda", "Mario", "Metroid"], ["Halo", "Gears of War", "Forza"]];
const [nintendo, xbox] = games;
console.log(nintendo); // ["Zelda", "Mario", "Metroid"]
console.log(xbox); // ["Halo", "Gears of War", "Forza"]
console.log(nintendo[0]); // "Zelda"
console.log(nintendo[1]); // "Mario"
console.log(nintendo[2]); // "Metroid"      


games.forEach((game) => console.log(game));

