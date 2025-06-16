export default function TarefaItem({
  tarefa,
  onToggleConcluir,
  onRemoverTarefa,
}) {
  return (
    <li>
      <span
        style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}
      >
        {tarefa.descricao}
      </span>
      <button onClick={() => onToggleConcluir(tarefa.id)}>
        {tarefa.concluida ? "Desfazer" : "Concluir"}
      </button>
      <button onClick={() => onRemoverTarefa(tarefa.id)}>Remover</button>
    </li>
  );
}
