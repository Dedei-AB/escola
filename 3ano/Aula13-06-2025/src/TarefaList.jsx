import TarefaItem from "./TarefaItem";

export default function TarefaList({
  tarefas,
  onToggleConcluir,
  onRemoverTarefa,
}) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem
          tarefa={tarefa}
          onToggleConcluir={onToggleConcluir}
          onRemoverTarefa={onRemoverTarefa}
        />
      ))}
    </ul>
  );
}
