import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButtonAdd = () => {
    setCount(count + 1);
  };

  const handleButtonRemove = () => {
    setCount(count - 1);
  };

  const handleButtonReset = () => {
    setCount(0);
  };

  return (
    <div className={styles.counter}>
      <p>{count}</p>
      <button onClick={handleButtonAdd}>Dodawaj przyjacielu!</button>
      <button onClick={handleButtonRemove}>Usuwaj przyjacielu!</button>
      <button onClick={handleButtonReset}>Zresetuj</button>
    </div>
  );
};

export default Counter;
