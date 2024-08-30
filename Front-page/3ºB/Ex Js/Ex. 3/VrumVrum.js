let botaoCalcular = document.getElementById("executar")
let divResultado = document.getElementById("resultado")

function calcularViagem(){
    let distancia = Number(document.getElementById("distancia").value)
    let autonomia = Number(document.getElementById("km/L").value)
    let pedagio = Number(document.getElementById("pedagio").value)
    let valorGasosa = Number(document.getElementById("combustivel").value)
    let resultado = ((distancia/autonomia)*valorGasosa) + pedagio
    
    divResultado.innerText = resultado
}

botaoCalcular.onclick = calcularViagem