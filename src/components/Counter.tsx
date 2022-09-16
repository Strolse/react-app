import React, { useState } from "react";
import './Counter.scss';

export const Counter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  }

  return (
    <div>
      <div>{state}</div>
      <button onClick={increment}>increment</button>
    </div>
  )
}