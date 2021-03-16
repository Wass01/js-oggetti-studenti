// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function() {
  // creo oggetto che descrive studente
  var studente = {
    nome: "Wassim",
    cognome: "Maatalla",
    età: 20
  };

  // stampo le proprietà di studente
  for (var key in studente) {
    console.log(studente[key]);
  }

  // creo array studenti
  var studentiArray = [
    {
      nome: "Luca",
      cognome: "Quadri",
      età: 22,
    },
    {
      nome: "Marco",
      cognome: "Brambilla",
      età: 25,
    },
    {
      nome: "Davide",
      cognome: "Rossi",
      età: 18,
    },
    {
      nome: "Alessandro",
      cognome: "Bianchi",
      età: 18,
    }
  ];

  // stampo con un ciclo il nome e il cognome
  for (var i = 0; i < studentiArray.length; i++) {
    console.log(studentiArray[i].nome + " " + studentiArray[i].cognome);
  }

 // chiedo all'utente di inserire nome cognome e eta
  var oggettoUtente = {
    nome: prompt("Inserisci il nome: "),
    cognome: prompt("Inserisci il cognome: "),
    età: parseInt(prompt("Inserisci la tua età"))
  };

  // stampo le proprietà di studente
  for (var key2 in oggettoUtente) {
    console.log(oggettoUtente[key2]);
  }
});
