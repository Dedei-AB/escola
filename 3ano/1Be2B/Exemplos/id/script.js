// Obtém o botão pelo ID
const button = document.getElementById('changeMessage');

// Adiciona um evento de clique ao botão
button.addEventListener('click', function () {
  // Obtém o elemento pelo ID
  const message = document.getElementById('message');
  
  // Altera o conteúdo
  message.textContent = Number(message.textContent) + 1;
});

