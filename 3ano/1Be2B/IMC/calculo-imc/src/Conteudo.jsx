import { useState } from "react";
import Calculo from "./Calculo";

function Conteudo() {
  const [altura, setAltura] = useState(1.65);
  const [peso, setPeso] = useState(65);
  const [resultado, setResultado] = useState("");
  const [verdade, setVerdade] = useState(false);

  return (
    <div>
      <h1>Calculadora IMC</h1>

      <div className="numeros">
        <h2>Altura</h2>
        <input
          type="number"
          onChange={(a) => setAltura(Number(a.target.value))}
        />
        <h2>Peso</h2>
        <input
          type="number"
          onChange={(p) => setPeso(Number(p.target.value))}
        />

        <button onClick={() => setVerdade(true)}>Calcular IMC</button>

        {verdade && <Calculo altura={altura} peso={peso} />}
      </div>
    </div>
  );
}

export default Conteudo;
