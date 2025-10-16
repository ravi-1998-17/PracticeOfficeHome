import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/UI/Buttons";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs for count =", count);

    return () => {
      console.log("Cleaning up previous effect for count =", count);
    };
  }, [count]);

  return (
    <>
      <h2 className="joke">{count}</h2>
      <div className="container">
        <div className="card">
          <Buttons onClick={() => setCount(count + 1)}>COUNT</Buttons>
        </div>
      </div>
    </>
  );
}

export default App;

//API CALL WITHOUT AXIOS--------------------------------

// const [joke, setJoke] = useState(() => {
//   const savedJoke = localStorage.getItem("jokes");
//   return savedJoke ? JSON.parse(savedJoke) : "";
// });

// useEffect(() => {
//   localStorage.setItem("jokes", JSON.stringify(joke));
// }, [joke]);

// const getJokeHandler = () => {
//   fetch("https://icanhazdadjoke.com/slack")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let textJoke = data.attachments[0].text;
//       setJoke(textJoke);
//     })

//     .catch((err) => {
//       console.log(err);
//     });
// };

// -----------------------------------------------------
