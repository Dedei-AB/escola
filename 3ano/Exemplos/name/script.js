// Obtém o botão pelo ID
const button = document.getElementById('changeMessage');

// Adiciona um evento de clique ao botão
button.addEventListener('click', function () {
  // Obtém o elemento pelo ID
  const nome = document.getElementsByName('nomeCompleto');

  const resposta = document.getElementById('message');
  
  // Altera o conteúdo
  resposta.textContent = `Olá, ${nome[0].value}`;
});

