import Input from "../UI/Input";
import Buttons from "../UI/Buttons";
import "./Form.css";
import { useState } from "react";

const Form = ({ addNewOrder }) => {
  const [data, setData] = useState({ name: "", qty: "1", price: "" });

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addNewOrder(data);
    setData({ name: "", qty: "1", price: "" });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-card">
          <label>Product: </label>
          <Input
            type={"text"}
            name={"name"}
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-card">
          <label>Price: </label>
          <Input
            type={"number"}
            name={"price"}
            value={data.price}
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-card">
          <label>Qty: </label>
          <select name="qty" value={data.qty} onChange={onChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <Buttons>Add</Buttons>
      </form>
    </>
  );
};

export default Form;
