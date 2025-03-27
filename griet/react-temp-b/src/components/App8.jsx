import React from "react";
import { useState, useEffect } from "react";
export default function App8() {
  const [amount, setAmount] = useState([]);
  const [value, setValue] = useState();
  const [total, setTotal] = useState(0);
  const handleAdd = () => {
    setAmount([...amount, value]);
  };
  useEffect(() => {
    setTotal(
      amount.reduce((s, value) => {
        return s + Number(value);
      }, 0)
    );
  }, [amount]);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Amount"
      ></input>
      <button onClick={handleAdd}>Add</button>
      <hr></hr>
      {amount && amount.map((value, index) => <div key={index}>{value}</div>)}
      Total:{total}
    </div>
  );
}