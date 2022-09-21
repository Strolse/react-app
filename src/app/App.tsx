import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE BUTTON</button>
      <Link to='/about'>О сайте</Link>
      <Link to='/'>Главная</Link>
      <AppRouter/>
    </div>
  )
}

export default App;