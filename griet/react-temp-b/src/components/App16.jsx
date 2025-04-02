import React, { useRef } from 'react'

export default function App16() {
  let num=useRef()
  const handleSubmit=()=>{
    let numref=num.current.value;
    if (numref>18){
      alert('Welcome');
    }
    else{
      alert('Not Allowed');
    }
  }
  return (
    <div>
      <h3>This is App16</h3>
      <p><input type="number" name="num" id="num" ref={num}/></p>
      <p><button onClick={handleSubmit}>Submit</button></p>
    </div>
  )
}