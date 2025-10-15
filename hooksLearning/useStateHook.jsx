import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/UI/Buttons";

function App() {
  const [data, setData] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    setData((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", data.email);
    console.log("Password: ", data.password);
    setData({ email: "", password: "" });
  };

  return (
    <>
      <div className="container">
        <form className="card" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            />
          </div>
          <Buttons>SUBMIT</Buttons>
        </form>
      </div>
    </>
  );
}

export default App;
