import "./Botoes.css";

function Botoes({ onIncrement, onDecrement }) {
  return (
    <div className="botoes">
      <button onClick={onDecrement}>+</button>
      <button onClick={onIncrement}>-</button>
    </div>
  );
}

export default Botoes;
