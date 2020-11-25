function bemVindo() {
    alert('Bem vindo a Semana 2 do DEVinHouse')
}

function confirmar() {
    var c = window.confirm('Vecê realmente deseja acessar a página?')
    if (c) setTimeout(alert('Bem vindo ao Exercicio da Semana 2 DEVinHouse'), 500)
        //else window.location.href = 'https://www.google.com.br/' //Referenciamento de uma URL
    else window.location = 'semana2.html' //Referenciamento de uma outra pag html dentro do projeto
}

function nome() {
    var nome = prompt('Qual o seu nome?')
    alert(`Bem vindo, ${nome}`)
    var idade = prompt('Qual a sua idade')
    var esporte = confirm('Você pratica algum esporte?')
    if (esporte == false) {
        esporte = 'Não'
    } else {
        esporte = "Sim"
    }
    console.log(`Nome ${nome}, Idade ${idade}, Pratica esporte? ${esporte}`)
}

function sobreNome() {
    var sobrenome = prompt('Qual o seu sobrenome?')
    var nome = prompt('Qual o seu nome?')
    alert(`Seu nome completo é: ${nome} ${sobrenome}`)
}

function calcNome() {
    var ultnome = prompt('Qual o seu ultimo sobrenome?')
    alert(`"Olá ${ultnome.toUpperCase()}. Seu sobrenome contem ${ultnome.length} letras"`)
}

function calcIdade() {
    var anoNacimento = Number(prompt('Qual seu ano de nascimento?'))
    var anoAtual = Number(prompt('Qual o ano atual atual?'))
    var calculo = anoAtual - anoNacimento
    alert(`Sua idade é ${calculo} ou ${calculo - 1}.`)

}

function idadeAuto() {
    var data = document.getElementById('data')
    var hoje = new Date()
    alert(hoje)
    var calcular = data - hoje.getUTCDate()
    res.innerHTML = `A sua idade é ${calcular}`
}
// bemVindo()
// confirmar()
// nome()
// sobreNome()
// calcNome()
// calcIdade()