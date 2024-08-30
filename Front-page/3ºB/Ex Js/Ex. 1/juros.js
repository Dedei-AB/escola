    
    let inputCapital = document.getElementById("capital")
    let inputTempo = document.getElementById("tempo")
    let inputTaxa = document.getElementById("taxa")
    let divResultado = document.getElementById("resultado")

let botaoCalcular = document.getElementById("executar")
botaoCalcular.onclick = calcularJuros

function calcularJuros(){
    
    let capital = Number(inputCapital.value)
    let tempo = Number(inputTempo.value)
    let taxa = Number(inputTaxa.value/100   )
    
    let montante = Number(capital * ((1+taxa)**tempo))

    divResultado.innerText = montante

}