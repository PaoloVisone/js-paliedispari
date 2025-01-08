// chiedere all'utente di inserire una parola
let parolaUser = prompt("Inserisci una parola");
console.log(isPalindroma(parolaUser))
// funzione che controlla se la parola è palindroma
function isPalindroma(parolaUser) {

    // Creo un array con le lettere della parola inserita
    let splitWord = parolaUser.split('');
    console.log(splitWord);

    // Uso reverse per invertire le lettere
    let reverseWord = splitWord.reverse();
    console.log(reverseWord);

    // unisco le lettere della parola con join
    let joinWord = reverseWord.reverse();
    console.log(joinWord);

    // verifico se la parola è palindroma
}
