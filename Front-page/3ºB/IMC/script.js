//CAPTURA DOS ELEMENTOS HTML QUE SERÃO  MANIPULADOS PELO JAVA
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calcularImc

function calcularImc(){

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    if (altura > 50){
        altura = altura/100
    }

    let imc = peso / (altura * altura)

    //SAÍDA
    divSaida.innerText = imc
}



