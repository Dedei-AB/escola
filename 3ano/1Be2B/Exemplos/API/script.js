function buscarCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        alert("Erro de BIOS.");
      }

      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("estado").value = data.estado;
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao buscar o cep.");
    });
}
