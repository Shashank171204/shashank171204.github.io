import React from "react";
import { useState, useEffect } from "react";
export default function () {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(v1) + Number(v2));
  }, [v1]);

  useEffect(() => {
    setTotal(Number(v1) * Number(v2));
  }, [v2]);

  return (
    <div>
      <p>
        <input type="number" onChange={(e) => setV1(e.target.value)}></input>
      </p>
      <p>
        <input type="number" onChange={(e) => setV2(e.target.value)}></input>
      </p>
      <p>Result:{total}</p>
    </div>
  );
}