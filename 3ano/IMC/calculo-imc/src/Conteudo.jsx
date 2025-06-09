function Conteudo({ calcularImc }) {
  return (
    <div>
      <h1>Calculadora IMC</h1>

      <div className="numeros">
        <input type="number" />
        <input type="number" />
        <button onClick={calcularImc}>Calcular IMC</button>
      </div>

      <h3>Seu IMC:</h3>
      <p></p>
      <h3>Categoria:</h3>
      <p></p>
    </div>
  );
}

export default Conteudo;
