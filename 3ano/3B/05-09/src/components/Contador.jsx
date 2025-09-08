import { useState } from "react";
import styles from "./Contador.module.css";

function Contador() {
  const estado = useState(5);
  let contador = estado[0];
  const setContador = estado[1];

  const Incrementar = () => {
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);
  };

  const Decrementar = () => {
    setContador((contador) => contador - 1);
  };

  const Reset = () => {
    setContador((contador) => contador - contador);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.contadorDisplay}>Contador</h1>
      <div className={styles.titulo}>{contador}</div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao} onClick={Incrementar}>
          +
        </button>
        <button className={styles.botao} onClick={Decrementar}>
          -
        </button>
      </div>
      <button className={styles.botao} onClick={Reset}>
        Reset
      </button>
    </div>
  );
}

export default Contador;
