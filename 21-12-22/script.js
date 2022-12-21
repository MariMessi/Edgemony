
//Esercizio 1

function messaggio() {
    console.log("Ciao, voglio fare un gioco con te." + "prima devi iscriverti al nostro " + "bootcamp");
   
    return ("Ciao, voglio fare un gioco con te." + "prima devi iscriverti al nostro" + "bootcamp");
 }

 messaggio();

//------>*<-----

//Esercizio 2

 let MarisInfo = {
    Name: "Marilena",
    Surname: "Messina",
    Age: "27",
    NMentalBreakdown: "40",
    Hobby: ["sing, run, cry, play"],
    MusicalInstruments: ["gutar, ukulele, piano"],
    IsSheTall: false,
   
        
   };

console.log(MarisInfo)

console.log("gli hobby di Marilena sono: " + MarisInfo.Hobby);

//------>*<-----

//Avanzato 1

function operazione (first, second) {
    first = prompt("inserisci un numero");
    let parsedFirst = parseInt(first);
    second = prompt("inserisci un altro numero");
    let parsedSecond = parseInt(second);
    oper = prompt("inserisci l'operazione");

    if (oper === "+") {
      console.log(parsedFirst + parsedSecond);
    }
    else if (oper === "-") {
      console.log(parsedFirst - parsedSecond);
    }
    else if (oper === "/") {
      console.log(parsedFirst / parsedSecond);
    }
    else if (oper === "*") {
      console.log(parsedFirst * parsedSecond);
    }

}
operazione()



 















