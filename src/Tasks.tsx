import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';



interface TaskProps {
  id: string;
  content: string;
  onDeleteTask: (id: string) => void
}


export function Tasks({ content, id, onDeleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <section className={style.task}>
      <div>
        <input type="checkbox" name="" id={id} />
        <span className={style.input}>&#10004;</span>
        <p>{content}</p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash size={24} />
      </button>
    </section>
  )
}