import { useState } from "react";

export default function TarefaInput({ onAddTarefa }) {
  const [descricao, setDescricao] = useState("");

  const adicionar = () => {
    if (descricao.trim()) {
      onAddTarefa(descricao);
      setDescricao("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={descricao}
        onChange={(e) => {
          setDescricao(e.target.value);
        }}
        placeholder="Digite o nome da tarefa:"
      />
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}
