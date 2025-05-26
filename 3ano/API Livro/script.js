function buscarLivro(){
    const isbn = document.getElementById("isbn").value
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`
    console.log(url)

    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        if(data.error){
            alert("Erro ao buscar livro")
        }

        document.getElementById("nome-livro").textContent = `Nome do Livro: ${data.title}`
        document.getElementById("autor").textContent = `Autor: ${data.authors}`
        document.getElementById("publisher").textContent = `Editor(a): ${data.publisher}`
    })
}

document.getElementById("button").addEventListener("click", buscarLivro)