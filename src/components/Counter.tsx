import React, { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  }

  return (
    <div >
      <div>{state}</div>
      <button className={classes.btn} onClick={increment}>increment</button>
    </div>
  )
}