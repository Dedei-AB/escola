function submitToGoogleForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdhwdm06XCk8Vk539GsyfRbKt-ykJ7yuKyrID46-E_yGd-bHw/formResponse"; // substitua com o ID do seu formulário

    const formData = new FormData();
    formData.append("entry.534219487", name); // substitua pelo ID correto do campo no formulário Google
    formData.append("entry.680551134", email); // substitua pelo ID correto do campo no formulário Google

    fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        alert("Informações enviadas com sucesso!");
    }).catch((error) => {
        console.error("Erro ao enviar para o Google Form:", error);
    });
}