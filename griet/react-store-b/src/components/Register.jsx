import React from 'react'
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div>
      <div>
        <h1>Registration Form</h1>
        <p><input type="text" name="first" id="firstname"/></p>
        <p><input type="text" name="last" id="lastname"/></p>
        <p><input type="password" name="pwd" id="password"/></p>
        <p><input type="datetime-local" name="dob" id="dateofbirth"/></p>
        <button>Register</button>
        <p>Already Registered click<Link to="../login">here!!</Link></p>
      </div>
    </div>
  )
}
