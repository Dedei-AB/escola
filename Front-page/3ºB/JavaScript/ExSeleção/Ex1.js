function ClasseJogador(idade){
    let classe 
    if (idade < 5){
        console.log("Seu Joagdor não tem a idade mínima para jogar. :(")
    }else if (idade >=5 && idade <= 7){
        classe = 'infantil A'
        console.log(`Seu jogador está na classe ${classe}.`)
    }else if (idade <=10){
        classe = 'infantil B'
        console.log(`Seu jogador está na classe ${classe}.`)
    }else if (idade <=13){
        classe = 'juvenil A'
        console.log(`Seu jogador está na classe ${classe}.`)
    }else if (idade <=17){
        classe = 'juvenil B'
        console.log(`Seu jogador está na classe ${classe}.`)
    }else{
        classe = 'maior de 18 anos'
        console.log(`Seu jogador está na classe ${classe}.`)
    }
}

ClasseJogador(522)