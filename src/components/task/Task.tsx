import styles from './Task.module.css'
import {TbTrash} from 'react-icons/tb';
import { useState } from 'react';


interface taskProps{
  content:string;
  concludeTask:Function;
  unconcludeTask:Function;
  deleteConcludedTask:Function;
  deleteUnconcludedTask:Function;
}

export function Task(props:taskProps) {

  const [isConcluded, setIsConcluded] = useState(false)

  function setStatusOfTasks(){
    setIsConcluded(!isConcluded)
    if(!isConcluded){
      props.concludeTask()
    }else{
      props.unconcludeTask()
    }
    
  }

  function handleDeleteTask(){
    if(!isConcluded){
      props.deleteUnconcludedTask(props.content)
    }else{
      props.deleteConcludedTask(props.content)
    } 
  }  
  return(
  <div className={styles.task}>
    {isConcluded
      ?<span className={styles.checkConcluded} onClick={setStatusOfTasks} > </span>
      :<span className={styles.checkDefault} onClick={setStatusOfTasks}> </span>
    }
    {isConcluded
      ?<p className={styles.concluded}>{props.content}</p>
      :<p className={styles.default}>{props.content}</p>
    }
    <button><TbTrash size={18} onClick={handleDeleteTask} /></button>
  </div> 
  )
}