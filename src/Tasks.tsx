import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';



interface TaskProps {
  id: string;
  content: string;
}
export function Tasks({ content, id }: TaskProps) {
  const istarefa = content != undefined;

  return (
    <section className={style.task}>
      <div>
        <input type="checkbox" name="" id={id} />
        <span className={style.input}>&#10004;</span>
        <p>{content}</p>
      </div>
      <button><Trash size={24} /></button>
    </section>
  )
}