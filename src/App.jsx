import { use, useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/UI/Buttons";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("answer");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("answer", JSON.stringify(count));
  });

  const addCount = () => {
    setCount(count + 1);
  };

  const lessCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <span>
          Count: <h2>{count}</h2>
        </span>
        <Buttons onClick={addCount}>+</Buttons>
        <Buttons onClick={lessCount}>-</Buttons>
      </div>
    </>
  );
}

export default App;
