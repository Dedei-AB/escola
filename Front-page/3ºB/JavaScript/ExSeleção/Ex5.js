function convertMedida(cm, un){
    if (un == 'm'){
        console.log(cm/100)
    }else if (un == 'km'){
        console.log(cm/1000)
    }else if (un == 'mm'){
        console.log(cm*10)
    }else{
        console.log('Unidade inválida')
    }
}

convertMedida(10, 'dm');