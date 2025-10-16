import React from "react";
import "../UI/Input.css";

const Input = ({ type, name, value }) => {
  return (
    <>
      <input type={type} name={name} value={value} />
    </>
  );
};

export default Input;
