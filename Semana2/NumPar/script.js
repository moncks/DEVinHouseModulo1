function validar() {
    let numero = document.getElementById("numero")
    let res = document.getElementById("resposta")
    operacao = numero.value % 2
    if (operacao === 0) {
        res.innerHTML = `O número ${numero.value} é par`
    } else {
        res.innerHTML = `O número ${numero.value} é impar`
    }
}