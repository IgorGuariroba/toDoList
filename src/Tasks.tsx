import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';

export function Tasks() {
  return (
    <article className={style.article}>
      <div className={style.content}>
        <header className={style.info}>
          <div>
            <p className={style.created}>Tarefas criadas <span>5</span></p>
          </div>
          <div>
            <p className={style.concluded}>Concluidas <span>2 de 5</span></p>
          </div>
        </header>

        <div className={style.tasks}>
          <section className={style.task}>
            <div>
              <input type="checkbox" name="" id="" />
              <span className={style.input}>&#10004;</span>
              <p>Teaste 123</p>
            </div>
            <button><Trash size={24} /></button>
          </section>
          
        </div>

      </div>

    </article>
  )
}