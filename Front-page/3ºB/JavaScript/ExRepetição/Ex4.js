function Nprimo(n){
    let i = 2
    let d = 0
    while (i<n && d == 0){
        if (n%i == 0){
            d = 1
        }
        i +=1
    }
    if (d == 0){
        console.log('O número é primo.')
    }else{
        console.log('O número não é primo!')
    }
}

Nprimo(2754)