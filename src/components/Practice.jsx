import React, { useMemo, useRef, useState } from "react";
import Buttons from "./UI/Buttons";
import Child from "./Child";

const Practice = () => {
  const inputRef = useRef();

  return (
    <div>
      <Child ref={inputRef} />
      <Buttons onClick={() => inputRef.current.focusInput()}>
        Focus Input
      </Buttons>
      <Buttons onClick={() => inputRef.current.clearInput()}>
        Clear Input
      </Buttons>
    </div>
  );
};

export default Practice;
