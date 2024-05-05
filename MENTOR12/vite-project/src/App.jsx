import { useState } from "react";
import './index.css'

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="count">
        <button onClick={decrement}> - </button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
