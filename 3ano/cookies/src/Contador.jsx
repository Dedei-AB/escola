import "./Contador.css";
import { useState } from "react";
import Botoes from "./Botoes";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="contador">
      <h2>Bem Vindo ao contador da UTFPR:</h2>
      <div className="quantidade">{contador}</div>
      <Botoes onDecrement={incrementar} onIncrement={decrementar} />
    </div>
  );
}
