let sotrString = 'Akademia108';
// let str = sotrString.split('')
// str.sort();
// console.log(str);

function odwrocString(napis) {
    let strToArray = napis.split(""); //ad2
    let arraySort = strToArray.sort(); //ad3
    let arrayToString = arraySort.join(""); //ad4

    return arrayToString; //ad5
}

let odwrocnyNapis = odwrocString(sotrString) // ad1
console.log(odwrocnyNapis);

console.log(odwrocString("marek"));
console.log(odwrocString("Krystian"));let

// 1. przekazać string o funkcji
// 2. zamienić string na tablicę
// 3. posortować tablicę
// 4. zamienić posortowaną tablicę na  stringa
// 5. zwrócić posprtowanego stringa