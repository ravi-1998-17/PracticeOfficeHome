import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/UI/Buttons";

function App() {
  const [data, setData] = useState(() => {
    const savedText = localStorage.getItem('savedText');
    return savedText ? JSON.parse(savedText) : '';
  });

  const [getData, setGetData] = useState(() => {
    const getSavedText = localStorage.getItem('getSavedText');
    return getSavedText ? JSON.parse(getSavedText) : '';
  });

  useEffect(() => {
    localStorage.setItem('savedText', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('getSavedText', JSON.stringify(data));
  }, [getData]);

  const changeHandler = (e) => {
    setData(e.target.value);
  };
  
  const submitText = () => {
    setGetData((prev) => {
      return [data, ...prev]
    })
  }


  return (
    <>
      <p>{getData}</p>

      <div className="container">
        <div className="card" >
          <div className="input-box">
            <label>Type here:</label>
            <textarea value={data} onChange={changeHandler} />
          </div>
          <Buttons onClick={submitText}>SUBMIT</Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
