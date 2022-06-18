import {TbClipboardText} from 'react-icons/tb'
import styles from './EmptyTask.module.css'

export function EmptyTask(){
  return(
    <div className={styles.bodyTasksEmpty}>
      <TbClipboardText size={60}  />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize itens a fazer</p>
    </div>
  )
}