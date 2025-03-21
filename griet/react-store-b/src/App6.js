import React, { useState } from 'react'

export default function App6() {
    const [string,setString]=useState()
    const[arr,setArray]=useState([])
    const add=()=>{
        setArray([...arr,string])
    }
    const handleDelete=(value)=>{
        setArray(arr.filter((element)=>element != value));
      }
    return (
        <div class="Container">
            <div>
                <h1>Data Adder</h1>
                <p><input type="text" placeholder="Enter the Hobbies"onChange={(event)=>setString(event.target.value)}/>&nbsp;&nbsp;<button onClick={add}>Add</button></p>
                <hr />
                {arr && arr.map((value,index)=><li key={index}>{value} <button onClick={(e)=>{handleDelete(value)}}>Delete</button></li>)}
            </div>
        </div>
    )
}
