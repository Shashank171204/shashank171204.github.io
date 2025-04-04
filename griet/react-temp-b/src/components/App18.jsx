import React from "react";
import { useState, useMemo } from "react";
export default function App18() {
  const [num, setNum] = useState(100);
  const [count, setCount] = useState(0);
  const f1 = () => {
    console.log("f1 function called");
    let i;
    for (i = 0; i < num ** 2; i++) {}
    return i;
  };
  const result = useMemo(() => f1(), [num]);
  
  return (
    <div>
      <h3>This is App18</h3>
      {result}
      <p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </p>
      {count}
      <p>
        <button onClick={() => setNum(num + 1)}>Increase Num</button>
      </p>
      {num}
    </div>
  );
}