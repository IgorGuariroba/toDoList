import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';



interface TaskProps {
  id: string;
  content: string;
  onDeleteTask: (id: string) => void
  onConcluidTask: (situation: boolean, id: string) => void
}


export function Tasks({ content, id, onDeleteTask, onConcluidTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function HandleConcluidTask(event: React.MouseEvent<HTMLInputElement >) {
    onConcluidTask(event.currentTarget.checked,event.currentTarget.name)
  }

  return (
    <section className={style.task}>
      <div>
        <input onClick={HandleConcluidTask} type="checkbox" name={id} id={id} />
        <span className={style.input}>&#10004;</span>
        <p>{content}</p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash size={24} />
      </button>
    </section>
  )
}