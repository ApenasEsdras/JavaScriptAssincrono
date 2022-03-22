function calculaSaldo(saldo, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
    {
        preco: 2,
        nome: 'maçã',
    },
    {
        preco: 30,
        nome: 'roupa',
    },
    {
        preco: 25,
        nome: 'carne',
    },
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function somaNumeros(arr) {
    if (!arr || !arr.length) return;
    const soma = arr.reduce((prev, curr) => prev + curr);

    return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));