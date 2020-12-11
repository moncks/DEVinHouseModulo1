function media() {
    var calculo = 0;
    for (var i = 0; i < arguments.length; i++) {
        calculo += arguments[i];
    }
    return calculo / arguments.length;
}

var notas = [7.65, 8, 9];
console.log(`A MÉDIA DA NOTA : ${media.apply(null, notas)}`);


// Crie uma função que receba como parâmetro uma lista de notas e 
// calcule a média dessas notas imprimindo o resultado.