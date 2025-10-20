import React, { useReducer } from "react";
import Buttons from "./UI/Buttons";

const initialForm = { name: "", email: "", password: "" };

function reducer(state, action) {
  if (action.type === "SET_FIELD") {
    return { ...state, [action.field]: action.value };
  }
  if (action.type === "RESET") {
    return initialForm;
  } else {
    return initialForm;
  }
}

const Practice = () => {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const handleChange = (e) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
};

const onResetForm = () => {
      dispatch({ type: "RESET"});
  };

  return (
    <>
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Buttons onClick={onResetForm}>Reset</Buttons>
        <p>{JSON.stringify(form)}</p>
      </div>
    </>
  );
};

export default Practice;
