// Obtém o botão pelo ID
const button = document.getElementById('changeText');

// Adiciona um evento de clique ao botão
button.addEventListener('click', function () {
  // Obtém todos os elementos <p>
  const paragraphs = document.getElementsByTagName('p');

  // Itera pelos parágrafos e altera o texto de cada um
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = `Parágrafo ${i + 1}`;
  }
});

