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