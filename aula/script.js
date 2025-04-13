
const videogames = [{
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    platform: 'Nintendo Switch',
    releaseYear: 2017,
    developer: 'Nintendo',
    publisher: 'Nintendo',
    rating: 10
},
{
    id: 2,
    title: 'The Witcher 3: Wild Hunt',
    genre: 'Action role-playing',
    platform: 'PC, PS4, Xbox One, Nintendo Switch',
    releaseYear: 2015,
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    rating: 10
}, 
{
    id: 3,
    title: 'Dark Souls III',
    genre: 'Action role-playing',
    platform: 'PC, PS4, Xbox One',
    releaseYear: 2016,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    rating: 9
}]

let par_insert = " ";

for(let i = 0; i < videogames.length; i++){
    par_insert += `titulo = ${videogames[i].title} -</br> ${videogames[i].genre} -</br> ${videogames[i].platform} -</br> ${videogames[i].releaseYear} -</br> ${videogames[i].developer} -</br> ${videogames[i].publisher} -</br> nota=  ${videogames[i].rating}<br>`;
    
}

document.getElementById("paragrafo").innerHTML = par_insert;