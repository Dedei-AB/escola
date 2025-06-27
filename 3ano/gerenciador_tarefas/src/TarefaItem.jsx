function TarefaItem({ tarefa, onConcluir, onRemoverTarefa }) {
  return (
    <li>
      <span
        style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}
      >
        {tarefa.descricao}
      </span>
      <button onClick={() => onConcluir(tarefa.id)}>
        {tarefa.concluida ? "Desfazer" : "Concluir"}
      </button>
      <button onClick={() => onRemoverTarefa(tarefa.id)}>Remover</button>
    </li>
  );
}

export default TarefaItem;
