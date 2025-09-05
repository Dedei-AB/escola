import styles from "./Contador.module.css";

function Contador() {
  return (
    <div className={styles.container}>
      <h1 className={styles.contadorDisplay}>Contador</h1>
      <div>0</div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao}>-</button>
        <button className={styles.botao}>+</button>
      </div>
      <button className={styles.botao}>Reset</button>
    </div>
  );
}

export default Contador;
