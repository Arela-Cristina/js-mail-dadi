//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//chiediamo un numero random al utente atraverso un promt
let numUser = parseInt(prompt('Scrivi un numero dal 1 al 6'));

//facciamo generare al computer un numero random dal 1 al 6
let numPc = Math.floor(Math.random() * 7)

console.log(`numUser: ${numUser}`, `numPc: ${numPc}`)

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
let messagio = '';
//se numUser ha fatto il punteggio piu alto messagio: Hai vinto tu
if (numUser > numPc) {
    messagio = 'Hai vinto tu, complimenti!';
} else {
    //se numPc ha fatto il punteggio piu alto messagio: Ha visto il computer
    messagio = 'Ha vinto il computer :('
}

console.log(messagio)