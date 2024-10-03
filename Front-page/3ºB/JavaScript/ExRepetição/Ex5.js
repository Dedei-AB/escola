function primo(N){
    console.log(2)
    let m = 1
    for(let i = 3; m < N; i++){
        let d = 0
        for(let g = 2; g<i; g ++){
            if(i%g == 0){
                d ++
            }
        }
        if(d==0){
            console.log(i)
            m++
        }
    }
}

primo(10)