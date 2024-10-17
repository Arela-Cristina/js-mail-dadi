//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//creo un'array con la lista degli invitati
const hashiraEmails = [
    "giyu.tomioka@demoncorp.com",
    "kyojuro.rengoku@demoncorp.com",
    "shinobu.kocho@demoncorp.com",
    "tengen.uzui@demoncorp.com",
    "mitsuri.kanroji@demoncorp.com",
    "muichiro.tokito@demoncorp.com",
    "gyomei.himejima@demoncorp.com",
    "sanemi.shinazugawa@demoncorp.com",
    "obanai.iguro@demoncorp.com"
];
//tramite un prompt chiedo di scrivere agli invitati la loro mail 
//salvo il value in una variabile
//se la mail appartiene a la lista degli invitati
//ci sara un messagio : ' Benvenuto alla festa'
// se la mail non  appartiene a la lista degli invitati
//ci sara un messagio : 'Mi dispiace, non sei nella lista degli invitati'