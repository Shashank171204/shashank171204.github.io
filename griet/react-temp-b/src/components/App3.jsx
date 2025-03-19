import React, { useState } from 'react'

export default function App3() {
    const [email,setEmail]=useState()
    const [pwd,setPwd]=useState()
    const [msg,SetMsg]=useState()

    const handleSubmit =()=>{
        if(email==="john@gmail.com" && pwd === "1234"){
            SetMsg("Welcome John!")
        }
        else {
            SetMsg("Access Denied")
        }
    }
    return (
        <div>
            <div>
                <h2>Login Form</h2>
                {msg}
                <p><input type="text" onChange={(event)=>setEmail(event.target.value)}/></p>
                <p><input type="password" onChange={(event)=>setPwd(event.target.value)}/></p>
                <p><button onClick={handleSubmit}>Submit</button></p>
            </div>
            <div class="root"></div>
            <hr />
        </div>
    )
}