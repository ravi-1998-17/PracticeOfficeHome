import { use, useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/UI/Buttons";

function App() {
 

  
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
