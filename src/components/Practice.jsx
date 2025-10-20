import React, { useMemo, useState } from "react";
import Buttons from "./UI/Buttons";
import Child from "./Child";

const Practice = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  const doubleNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <p>Double: {doubleNumber}</p>
    </div>
  );
};

export default Practice;
