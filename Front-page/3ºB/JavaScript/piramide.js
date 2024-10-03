function piramide(camadas) {
    let i = 1;
    while (i <= camadas) {
        let linha = '';
        for (let l = 0; l < i; l++) {
            linha += '*';
        }
        console.log(linha);
        i += 1;
    }
}

piramide(4)