import React, { useState } from 'react';
import TarefaInput from './TarefaInput';
import TarefaList from './TarefaList';
//import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (descricao) => {
    const novaTarefa = { id: Date.now(), descricao, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarConcluir = (id) => {
    setTarefas(
      tarefas.map((tarefa) => 
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <TarefaInput onAddTarefa={adicionarTarefa} />
      <TarefaList
        tarefas={tarefas}
        onConcluir={alternarConcluir}
        onRemoverTarefa={removerTarefa}
      />
    </div>
  );
}

export default App;