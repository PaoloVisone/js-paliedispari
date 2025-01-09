// EX-PALINDROMO
// chiedere all'utente di inserire una parola
let parolaUser = prompt("Inserisci una parola");
console.log(isPalindroma(parolaUser))

// funzione che controlla se la parola è palindroma
function isPalindroma(parolaUser) {

    // creo un array con le lettere della parola inserita
    let splitWord = parolaUser.split('');
    console.log(splitWord);

    // uso reverse per invertire le lettere
    let reverseWord = splitWord.reverse();
    console.log(reverseWord);

    // unisco le lettere della parola con join
    let joinWord = reverseWord.join('');
    console.log(joinWord);

    // verifico se la parola è palindroma
    if (joinWord === parolaUser) {
        return true;
    } else {
        return false;
    }
}

// EX-PARIDISPARI
// chiediamo all'utente se pari o dispari
const userChoice = prompt('Pari o Disapri?')

// l'utete inserisce un numero da 1 a 5
const userNum = parseInt(prompt('Inserisci un numero'))

// generiamo un numero random per il computer
// funzione
function getRndInteger(max) {
    return Math.floor(Math.random() * (max)) + 1;
}
// console.log(getRndInteger(5));

// sommiamo i due numeri

let somma = getRndInteger(5) + userNum;

console.log(somma);


// Stabiliamo se la somma dei due numeri è pari o dispari
// (funzione)
function isPariDispari() {
    if (somma % 2 === 1) {
        return "dispari";
    } else {
        return "pari";
    }
}
console.log(isPariDispari());


// dichiaro chi ha vinto

if (isPariDispari() === userChoice) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");

}