import style from './Header.module.css';
import logo from './assets/logo.svg';

export function Header() {
  return (
    <header className={style.header}>
        <img className={style.logo} src={logo} alt="Logo da aplicação" />
        <h1 className={style.title}>to<span>do</span></h1>
      </header>
  )
}