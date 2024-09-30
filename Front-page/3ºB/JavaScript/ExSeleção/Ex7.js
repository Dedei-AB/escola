function carro(valorGasolina, valorAlcool){
    if (valorGasolina * 0.7 >= valorAlcool){
        console.log('Ainda compensa usar álcool.')
    }else{
        console.log('Não compensa usar álcool.')
    }
}
carro(6.09, 2.77);