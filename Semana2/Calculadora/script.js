let res = document.getElementById("resultado");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");

function somar() {
    operacao = Number(n1.value) + Number(n2.value)
    console.log("RESULTADO DA SOMA " + operacao)
    resultado(operacao)
}

function subtrair() {
    operacao = Number(n1.value) - Number(n2.value)
    resultado(operacao)
}

function multiplicar() {
    operacao = Number(n1.value) * Number(n2.value)
    resultado(operacao)
}

function dividir() {
    operacao = Number(n1.value) / Number(n2.value)
    resultado(operacao)
}

function resultado(operacao) {
    res.innerHTML = operacao
}