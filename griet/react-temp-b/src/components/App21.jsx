import React from "react";
import { useEffect, useState } from "react";
export default function App21() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    console.log("Component Mounted");
    fetch(url).then((res) => res.json().then((data) => setData(data)));
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Component Updated / Reloaded");
  };
  return (
    <div>
      <h3>This is App21</h3>
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>
      <hr></hr>
      {data.map((value,index)=>(
        <div key={index}>{value.name}-{value.email}</div>
      ))}
    </div>
  );
}