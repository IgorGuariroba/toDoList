import style from './Header.module.css';
import { CheckSquareOffset } from 'phosphor-react';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <CheckSquareOffset size={34} />
      </div>
      <h1 className={style.title}>tmy best <span>planned day</span></h1>
    </header>
  )
}