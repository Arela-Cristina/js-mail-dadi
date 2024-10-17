//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
let messaggio = '';

//chiediamo un numero random al utente atraverso un promt
let numUser = parseInt(prompt('Scrivi un numero dal 1 al 6'));
console.log(typeof numUser);
if (isNaN(numUser) || numUser < 1 || numUser > 6) {
    messaggio = 'Devi inserire un numero valido'
} else {
    //facciamo generare al computer un numero random dal 1 al 6
    let numPc = Math.floor(Math.random() * 6) + 1;
    console.log(`numUser: ${numUser}`, `numPc: ${numPc}`)

    //se numUser ha fatto il punteggio piu alto messaggio: Hai vinto tu
    if (numUser > numPc) {
        messaggio = 'Hai vinto tu, complimenti!';
    } else {
        //se numPc ha fatto il punteggio piu alto messaggio: Ha visto il computer
        messaggio = 'Ha vinto il computer :('
    }
}

console.log(messaggio);