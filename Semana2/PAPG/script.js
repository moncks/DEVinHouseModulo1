let vInicial = document.getElementById("vInicial")
let vRaiz = document.getElementById("vRaiz")
let res = document.getElementById("res")

let cont = 0;



function calcularPA() {
    let v1 = Number(vInicial.value)
    let v2 = Number(vRaiz.value)
    let lista = []
    let pa = v1
    if (validar(v1, v2)) {
        lista.push(v1)
        console.log(JSON.stringify(lista))
        for (cont = 1; cont < 10; cont++) {
            pa = pa + v2
            lista.push(pa)
            console.log(JSON.stringify(lista))

        }
    } else {
        alert('Preencher os campos')
    }
}

function calcularPG() {
    let v1 = Number(vInicial.value)
    let v2 = Number(vRaiz.value)
    let lista = []
    let pg = v1
    if (validar(v1, v2)) {
        lista.push(v1)
        console.log(JSON.stringify(lista))
        for (cont = 1; cont < 10; cont++) {
            pg = pg * v2
            lista.push(pg)
            console.log(JSON.stringify(lista))
        }
    } else {
        alert('Preencher os campos')
    }
}

function validar(v1, v2) {
    console.log(`esse é o v1 ${v1} e este o v2 ${v2}`)
    console.log(!v1)
    if (v1 && v2) {
        return true
    } else {
        return false
    }

}