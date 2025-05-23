// Obtém o botão pelo ID
const button = document.getElementById('changeStyle');

// Adiciona um evento de clique ao botão
button.addEventListener('click', function () {
  // Obtém todos os elementos com a classe "highlight"
  const elements = document.getElementsByClassName('highlight');

  // Itera pelos elementos e altera o estilo de cada um
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'red'; // Altera a cor do texto
    elements[i].textContent = `Texto alterado no elemento ${i + 1}`;
  }
});

