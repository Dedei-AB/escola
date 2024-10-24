function somaSerie(cont){
    let i = 1
    let p = 1
    let j = 0
    for(cont;cont>0; cont--){
        j += i*p
        i ++
        p += 2
    }
    return j
}

console.log(somaSerie(3)) // 1 + 6 + 15 = 22
console.log(somaSerie(4)) // 1 + 6 + 15 + 28 = 50