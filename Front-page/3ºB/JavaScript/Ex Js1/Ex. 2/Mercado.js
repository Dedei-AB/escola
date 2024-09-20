let inputTroco = document.getElementById("troco")
let resMoeda = document.getElementsByClassName("moedas")[0]
let resCedula20 = document.getElementsByClassName("cedula20")[0]
let resCedula10 = document.getElementsByClassName("cedula10")[0]
let botao = document.getElementById("executar")

let botaoCalcular = document.getElementById("executar")
botaoCalcular.onclick = calcularTroco

function calcularTroco(){
    let troco = Number(inputTroco.value)
    let nota20 = Number(20)
    let nota10 = Number(10)
    let moeda = Number(1)
    for (var troco20 = 0; troco>= nota20; troco20 ++) {
        troco -= 20
    }
    for (var troco10 = 0; troco>= nota10; troco10 ++) {
        troco -= 10
    }
    for (var moeda1 = 0; troco>= moeda; moeda1 ++) {
        troco -= 1
    }
    
    resMoeda.innerText = moeda1;
    resCedula10.innerText = troco10;
    resCedula20.innerText = troco20;
}