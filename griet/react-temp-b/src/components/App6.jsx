import React, { useState } from 'react'

export default function App6() {
    const [string,setString]=useState()
    const[arr,setArray]=useState([])
    const add=()=>{
        setArray([...arr,string])
    }
    return (
        <div class="Container">
            <div>
                <h1>Data Adder</h1>
                <p><input type="text" placeholder="Enter the Hobbies"onChange={(event)=>setString(event.target.value)}/>&nbsp;&nbsp;<button onClick={add}>Add</button></p>
                <hr />
                {arr && arr.map((value,index)=><li key={index}>{value}</li>)}
            </div>
            <hr />
        </div>
    )
}
