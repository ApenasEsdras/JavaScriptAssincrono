// Filtre e retorne todos os números pares de um array.

function filtraPares(arr) {
    if (!arr || !arr.length) return;

    const filteredArr = arr.filter((item) => item % 2 === 0);

    return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// retorna numeros inpares
function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0;
}

console.log(filterPares(mapArray))