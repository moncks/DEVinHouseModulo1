/*Crie uma função que retornará uma promise, 
ela receberá dois valores numéricos como parâmetro, 
a função deve somar os dois valores
e somente resolver a promise caso o resultado seja par retornando o valor da soma 
e rejeitando a promise caso ímpar, retornando uma mensagem explicativa */




function mostrarPar(a, b) {
    const res = a + b
    return new Promise((resolve, reject) => {
        if (res % 2 == 0) {
            resolve(res)
        } else {
            reject("O resultado não é par, portanto a soma não sera efetivada!!!")
        }
    })
}

mostrarPar(3, 2)
    .then(resultado => console.log("Resultado: ", resultado))
    .catch(mensagem => console.log("Catch: ", mensagem))