import { Header } from "./components/header/Header";
import './global.css';
import styles from './App.module.css';
import { EmptyTask } from "./components/task/EmptyTask";
import { Task } from "./components/task/Task";
import { ChangeEvent, FormEvent, useState } from "react";

import {FiPlusCircle} from 'react-icons/fi'


function App() {

 
  
  const [concludedTasks, setConcludedTasks] = useState(0);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [tasks, setTasks] = useState(['Essas tarefas são apenas exemplos', 'Você pode deleta-las sem medo', 'E inserir as suas no campo ai de cima']);
  const taskCounter = tasks.length;

  function addNewTask(event:FormEvent){
    event.preventDefault()
    setTasks([...tasks, newTaskDescription])
    setNewTaskDescription('')
  }
  function handleAddNewTaskChange(event:ChangeEvent<HTMLInputElement>){
    setNewTaskDescription(event.target.value)
  }
  function concludeTask(){
    setConcludedTasks(concludedTasks+1);
  }
  function unconcludeTask(){
    setConcludedTasks(concludedTasks-1);
  }
  function deleteConcludedTask(taskToDelete:string){
    const taskListWithoutDeletedOne = tasks.filter(task =>{
      return task !== taskToDelete;
    })
    setTasks(taskListWithoutDeletedOne);
    setConcludedTasks(concludedTasks-1);
  }
  function deleteUnconcludedTask(taskToDelete:string){
    const taskListWithoutDeletedOne = tasks.filter(task =>{
      return task !== taskToDelete;
    })
    setTasks(taskListWithoutDeletedOne);
    
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={addNewTask} className={styles.form}>
            <input placeholder="Adicione uma nova tarefa" required autoComplete="off" name="task" value={newTaskDescription} onChange={handleAddNewTaskChange} />
            <button type="submit">Criar <FiPlusCircle size={16} /></button>
        </form>

        <div className={styles.bodyTasks} >
          <div className={styles.bodyTasksHeader}>
            <strong className={styles.createdTasks}>Tarefas Criadas <span>{taskCounter}</span></strong>
            <strong className={styles.concludedTasks}>Concluídas <span>{concludedTasks} de {taskCounter}</span></strong>
          </div>
          {taskCounter > 0 
            ?tasks.map(
                task=>{
                  return <Task
                    key={task}
                    content={task}
                    concludeTask={concludeTask}
                    unconcludeTask={unconcludeTask}
                    deleteConcludedTask={deleteConcludedTask}
                    deleteUnconcludedTask={deleteUnconcludedTask}
                  />
                }
              )
              
            :<EmptyTask />
          
          }
          
        </div>
      </div>
    </div>
  )
}

export default App