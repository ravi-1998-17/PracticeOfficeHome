import React from "react";
import Buttons from "./UI/Buttons";

function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <>
      <div>
        <Buttons onClick={onClick}>Child</Buttons>;
      </div>
    </>
  );
}

export default Child;
