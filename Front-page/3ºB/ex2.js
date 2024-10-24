function menor(a, b, c){
    if(a == b && b == c){
        console.log('Os números tem valores iguais')
        return a
    }else if(a<=b && a<=c){
        console.log('O menor número é o',a)
        return a
    }else if(b<=a && b<=c){
        console.log('O menor número é o',b)
        return b
    }else if(c<=a && c<=b){
        console.log('O menor número é o',c)
        return c
    }
}

menor(-1, -2, -2)