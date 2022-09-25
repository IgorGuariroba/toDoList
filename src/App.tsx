import { useState } from 'react'
import { Header } from './Header'
import { Plus } from "phosphor-react";

import style from './App.module.css';
import { Tasks } from './Tasks';


function App() {
  return (
    <div>
      <Header />
      <main>
        <div className={style.search} >
          <input type="text" />
          <button className={style.criar}>
            Criar
            <Plus size={16} />
            </button>
        </div>

        <Tasks />

      </main>

    </div>
  )
}

export default App
