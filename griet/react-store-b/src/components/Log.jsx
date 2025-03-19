import React from 'react'
import "./log.css";
import { Link } from "react-router-dom"
export default function Log() {
  return (
    <div>
      <div>
        <h1>Login Form</h1>
        <p><input type="text" id="email" placeholder="Email Address" /></p>
        <p><input type="password" id="password" placeholder="Email Password" /></p>
        <button>Log In</button>&nbsp;&nbsp;
        <button><Link to="../register" class="register">Register</Link></button>
      </div>
    </div>
  )
}
