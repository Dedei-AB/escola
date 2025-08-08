import TarefaItem from "./TarefaItem";

function TarefaList({ tarefas, onConcluir, onRemoverTarefa }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={onConcluir}
          onRemoverTarefa={onRemoverTarefa}
        />
      ))}
    </ul>
  );
}

export default TarefaList;
