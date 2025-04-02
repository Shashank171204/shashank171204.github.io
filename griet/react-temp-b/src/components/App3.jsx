import React from "react";
import { useState } from "react";
export default function App3() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const handleSubmit = () => {
    if(email==="john@gmail.com" && password === "1234"){
        setMsg("Welcome John!")
    }
    else {
        setMsg("Access Denied")
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      {msg}
      <p>
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </p>
      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
}
