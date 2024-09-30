function carro(valorGasolina, valorAlcool){
    if (valorGasolina * 0.7 >= valorAlcool){
        console.log('Ainda compensa usar álcool.')
        return true
    }else{
        console.log('Não compensa usar álcool.')
        return false
    }
}
carro(6.09, 3);