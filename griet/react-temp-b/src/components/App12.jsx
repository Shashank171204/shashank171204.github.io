import React from "react";
import { useState, useRef, useEffect } from "react";
export default function App12() {
  const [price, setPrice] = useState(0);
  const previousPrice = useRef(0);
  const priceRef = useRef();
  useEffect(() => {
    if (previousPrice.current > price) {
      priceRef.current.style.color = "red";
    } else {
      priceRef.current.style.color = "green";
    }
    previousPrice.current = price;
  }, [price]);

  return (
    <div>
      <h3>This is App12</h3>
      <p>
        <input type="number" onChange={(e) => setPrice(e.target.value)}></input>
      </p>
      Previous Price:{previousPrice.current}
      <h4 ref={priceRef}>Current Price:{price}</h4>
    </div>
  );
}