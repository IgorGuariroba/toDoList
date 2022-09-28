import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Header } from './Header'
import { Plus } from "phosphor-react";

import taskImg from './assets/Clipboard.png';
import style from './App.module.css';
import { Tasks } from './Tasks';

interface Tasks {
  id: string
  content: string
}

function App() {

  const [tasks, settasks] = useState([{
    id: '',
    content: ''
  }
  ])

  const [task, setNewTask] = useState('');


  function deleteTask(TaskToDelete: string) {
    const TasksWithoutDeleteOne = tasks.filter(task => {
      if (task.id != TaskToDelete) {
        return task;
      }
    })
    console.log(TasksWithoutDeleteOne)
    settasks(TasksWithoutDeleteOne);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    settasks([...tasks, { id: task, content: task }]);
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTask(event.target.value);
  }

  function handleNewTaskIvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Inclua um nova tafera')
  }

  function calcTasks() {
    const countertask = tasks.reduce((total, task) => {
      if (task.id != '') {
        return total += 1;
      }
      return 0;
    }, 0)

    return countertask;
  }

  return (
    <div>
      <Header />
      <main>
        <form onSubmit={handleCreateNewTask}>
          <div className={style.search} >
            <input
              placeholder='Adicione uma nova tarefa'
              type="text"
              value={task}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskIvalid}
              required
            />

            <button
              type='submit'
              className={style.criar}>
              Criar
              <Plus size={16} />
            </button>
          </div>
        </form>

        <article className={style.article}>
          <div className={style.contentTarefa}>
            <header className={style.info}>
              <div>
                <p className={style.created}>Tarefas criadas <span>5</span></p>
              </div>
              <div>
                <p className={style.concluded}>Concluidas <span>2 de 5</span></p>
              </div>
            </header>

            <div className={style.tasks}>
              {
                tasks.map(newtask => {
                  if (newtask.id !== '') {
                    return (<Tasks
                      key={newtask.id}
                      content={newtask.content}
                      id={newtask.id}
                      onDeleteTask={deleteTask}
                    />)
                  }
                })
              }

              {
                calcTasks() <= 0 ? <div className={style.zeroTask}>
                  <img src={taskImg} alt="icon de tarefa" />
                  <p>Você ainda não tem tarefas cadastradas </p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div> : ''
              }

            </div>

          </div>

        </article>
      </main>

    </div>
  )
}

export default App
