function removerAposUltimaBarra(url){
    const indiceUltimaBarra = url.lastIndexOf('/');
    return indiceUltimaBarra !== -1 ? url.substring(0, indiceUltimaBarra + 1) : url;
}

function submitToGoogleForm(){
    event.preventDefault()
    if (document.getElementById("myForm").checkValidity() == true){
    const name = document.getElementById("nome").value; 
    const email = document.getElementById("email").value;

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdhwdm06XCk8Vk539GsyfRbKt-ykJ7yuKyrID46-E_yGd-bHw/formResponse"; 

    const formData = new FormData();
    formData.append("entry.534219487", name);
    formData.append("entry.680551134", email);

    fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // Pode ser mantido como no-cors, mas você não verá a resposta
    }).then(() => {
        window.location.href = removerAposUltimaBarra(window.location.href) + "obrigado.html"
    }).catch((error) => {
        console.error("Erro ao enviar para o Google Form:", error);
    });
}else{
    console.error("Erro ao enviar para o Google Form");
}
}

let botaoEnviar = document.getElementById("button")
botaoEnviar.onclick = submitToGoogleForm