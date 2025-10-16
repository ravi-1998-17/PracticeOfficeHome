import Input from "../UI/Input";
import Buttons from "../UI/Buttons";
import "./Form.css";
import { useState } from "react";

const Form = ({ addNewOrder }) => {
  const [data, setData] = useState({ name: "", qty: "", price: "" });

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addNewOrder(data);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-card">
          <label>Name: </label>
          <Input type={"text"} name={"name"} onChange={onChangeHandler} />
        </div>

        <div className="form-card">
          <label>Qty: </label>
          <select onChange={onChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="form-card">
          <label>Price: </label>
          <Input type={"number"} name={"price"} onChange={onChangeHandler} />
        </div>

        <Buttons>Add</Buttons>
      </form>
    </>
  );
};

export default Form;
