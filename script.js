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


// sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari
// (funzione)

// dichiaro chi ha vinto