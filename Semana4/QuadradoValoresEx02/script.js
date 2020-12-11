//Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.

const valorQuadrado = (...numeros) =>
    numeros.map((acumulador, corrente) => acumulador ** 2);

const numerosQuadrados = valorQuadrado(1, 2, 10, 20, 100, 200);

console.log('Números ao quadrado: ', numerosQuadrados)