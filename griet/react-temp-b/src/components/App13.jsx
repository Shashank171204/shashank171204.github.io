import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function App13() {
  const [page, setPage] = useState();
  const Navigate = useNavigate();
  const showApp = () => {
   Navigate(page);
  };
  return (
    <div>
      <h3>This is App13</h3>
      <select onChange={(e)=>setPage(e.target.value)}>
      <option value="">--Select--</option>
        <option value="/app1">App1</option>
        <option value="/app2">App2</option>
        <option value="/app3">App3</option>
      </select>
      <button onClick={showApp}>Click</button>
      <br></br>
      <Link to="/app10">Show App10</Link>
    </div>
  );
}