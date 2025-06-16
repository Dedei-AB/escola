import TarefaItem from "./TarefaItem";

function TarefaList({ tarefas, onConcluir, onRemover }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem
          tarefa={tarefa}
          onToggleConcluir={onConcluir}
          onRemoverTarefa={onRemover}
        />
      ))}
    </ul>
  );
}

export default TarefaList;
