var btnAdd = document.getElementById('btnAdd');
var txtItem = document.getElementById('txtItem');
var selLista = document.getElementById('selLista');
var listaMercado = [];
carregarListaMercado();

function adicionarNaLista() {

}

function verificaTecla(event) {
    if (event.key == 'Enter') {
        adicionarNaLista();
    }
}

btnAdd.addEventListener('click', adicionarNaLista);
txtItem.addEventListener('keyu p', verificaTecla);