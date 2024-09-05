function multa(){
    let veloVia = Number(document.getElementById("velomax").value)
    let veiculo = Number(document.getElementById("veiculo").value)
    let exedido = Number(((veiculo-veloVia)/veloVia)*100)
    if (veloVia >= veiculo){
        document.getElementById("multa").innerText = "Você não exedeu o limite de velocidade."
        document.getElementById("valor").innerText = "Valor da multa: R$ 0,00"
    }else if(exedido<20){
        document.getElementById("multa").innerText = ("Você exedeu "+exedido+"% do limite de velocidade.")
        document.getElementById("valor").innerText = "Valor da multa: R$ 130,16"
    }else if(exedido >=20 && exedido<50){
        document.getElementById("multa").innerText = ("Você exedeu "+exedido+"% do limite de velocidade.")
        document.getElementById("valor").innerText = "Valor da multa: R$ 195,23"
    }else{
        document.getElementById("multa").innerText = ("Você exedeu "+exedido+"% do limite de velocidade.")
        document.getElementById("valor").innerText = "Valor da multa: R$ 880,41"
    }
}
let botaoCalcular = document.getElementById("botao")
botaoCalcular.onclick = multa
