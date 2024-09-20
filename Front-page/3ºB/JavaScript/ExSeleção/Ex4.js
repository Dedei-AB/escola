console.clear()
function NumPrimo(n){
    let i = 2
    let d = 0
    console.log(`Irei testar se o número ${n} é primo.\nProcessando...`)
    if (n == 2){
        console.log('O número é primo!')
    }
    while (i<n || d == 0){
        if (n%i == 0){
            d = 1
        }
        i +=1
    }
    if (d == 0){
        console.log('O número não é primo.')
    }else{
        console.log('O número é primo!')
    }
}
NumPrimo(275384)