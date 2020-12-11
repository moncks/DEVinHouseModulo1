const funcionario = {
    nome: 'Godofredo',
    idade: 25,
    cargo: 'Programador',
    salario: 4500
}

const imprimirFuncionario = funcionario => {
    const { nome, cargo, salario } = funcionario;
    /*const nome = funcionario.nome 
    (A linha de cima simplifica o comando comentado que seria feito para todas as variaveis)*/
    console.log(`Nome: ${nome}, Cargo ${cargo}, Salário: R$${salario}`) //TemplateString
}
imprimirFuncionario(funcionario);


/*Considerando um objeto funcionário com as propriedades nome, idade, cargo e salário, 
crie uma função que receba um objeto funcionário e retorne um novo objeto "clonando" o 
funcionário recebido, alterando o nome e a idade.*/

//Sem ArrowFunction
function criarNovoFuncionarioComParametro(funcionario, nome, idade) {
    const novoFuncionario = {...funcionario /*Esse comando está clonando o funcionario*/ , nome: nome, idade: idade }
}

//Com ArrowFunction
const criarNovoFuncionario = (funcionario, nome, idade) => /*Isso aqui "=>" é a ArrowFunction*/ {
    return {...funcionario /*Esse comando está clonando o funcionario*/ , nome: nome, idade: idade }
}
console.log(criarNovoFuncionario(funcionario, 'Brayan', '30'))