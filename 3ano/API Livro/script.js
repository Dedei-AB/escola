function buscarLivro(){
    document.getElementById("nome-livro").textContent = `Procurando`
    document.getElementById("autor").textContent = ``
    document.getElementById("publisher").textContent = ``
    const isbn = document.getElementById("isbn").value
    if(!isbn){
        document.getElementById("nome-livro").textContent = `Insira um ISBN`
        document.getElementById("autor").textContent = ``
        document.getElementById("publisher").textContent = ``
        return alert("Erro de BIOS")
    }
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`
    console.log(url)

    fetch(url)
    .then((response) =>{
        if(!response.ok){
            document.getElementById("nome-livro").textContent = `ISBN Inválido`
            document.getElementById("autor").textContent = ``
            document.getElementById("publisher").textContent = ``
            return
        }else{
            return response.json()
        }
    })
    .then((data) =>{
        document.getElementById("nome-livro").textContent = `Nome do Livro: ${data.title}`
        document.getElementById("autor").textContent = `Autor(es): ${data.authors}`
        document.getElementById("publisher").textContent = `Editor(a): ${data.publisher}`
    })
    .catch((error) =>{
        console.log(error)
        Alert("Erro ao buscar livro");
    })
}

document.getElementById("button").addEventListener("click", buscarLivro);
