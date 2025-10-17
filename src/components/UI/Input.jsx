import React from "react";
import "../UI/Input.css";

const Input = ({ type, name, value, onChange }) => {
  return (
    <>
      <input type={type} name={name} value={value} onChange={onChange}/>
    </>
  );
};

export default Input;
