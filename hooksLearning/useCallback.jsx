import React, { useCallback, useEffect, useReducer, useState } from "react";
import Buttons from "./UI/Buttons";
import Child from "./Child";

const Practice = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    setData(result);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div>
        <h3>Users:</h3>
        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
};

export default Practice;
