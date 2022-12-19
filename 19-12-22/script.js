let firstNumber = prompt ("Inserisci un numero");
let operation = prompt ("Quale operaziove vuoi eseguire?");
let secondNumber = prompt ("Inserisci un altro numero");


if (operation === "+") {
    console.log("Addizione: " + (firstNumber + secondNumber));
}
if ( operation === "*" ) {
    console.log("Moltiplicazione: " + (firstNumber * secondNumber));
}
if (operation === "-") {
    console.log("Sottrazione: " + (firstNumber - secondNumber));
}
if (operation === "/") {
    console.log("Divisione: " + (firstNumber / secondNumber));
}
if (operation === "%") {
    console.log("Modulo: " + (firstNumber % secondNumber));
}


