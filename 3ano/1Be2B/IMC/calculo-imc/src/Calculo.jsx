function Calculo({ altura, peso }) {
  const calcularImc = () => {
    return peso / altura ** 2;
  };

  const categoria = () => {
    const imc = calcularImc();
    let categoria = "";

    if (imc < 18.5) {
      categoria = "Baixo peso";
    } else if (imc < 25) {
      categoria = "Peso normal";
    } else if (imc < 30) {
      categoria = "Excesso de peso";
    } else if (imc < 35) {
      categoria = "Obesidade de classe 1";
    } else if (imc < 40) {
      categoria = "Obesidade de classe 2";
    } else {
      categoria = "Obesidade de classe 3";
    }

    return categoria;
  };

  const imc = calcularImc();

  return (
    <>
      <h2>Valor do IMC:</h2>
      <p>{imc.toFixed(2)}</p>

      <h2>Categoria</h2>
      <p>{categoria()}</p>
    </>
  );
}

export default Calculo;
