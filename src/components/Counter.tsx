import { FC, useState } from "react";
import classes from "./Counter.module.scss";

type CounterProps = {};

export const Counter: FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </div>
  );
};
