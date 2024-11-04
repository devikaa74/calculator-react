import React, { useState } from 'react'
import './App.css'

function App() {
  const [display,setDisplay]=useState("")

  const appendChar=(char)=>{
    setDisplay(display+char)
  }

  const clearAll=()=>{
    setDisplay("")
  }

  const deleteLast=()=>{
    setDisplay(display.slice(0,-1))
  }

  const calCulate=()=>{
    try{
      setDisplay(eval(display).toString())

    }catch{
      setDisplay("error")
    }
  }

  return (
    <>
      <div className="calculator">
        <input type="text" value={display} readOnly className='display' />
        <div className="buttons">
          <button onClick={()=>appendChar('/')}>/</button>
          <button onClick={()=>appendChar('*')}>*</button>
          <button onClick={()=>appendChar('+')}>+</button>
          <button onClick={()=>appendChar('-')}>-</button>

          <button onClick={()=>appendChar('1')}>1</button>
          <button onClick={()=>appendChar('2')}>2</button>
          <button onClick={()=>appendChar('3')}>3</button>
          <button onClick={()=>appendChar('4')}>4</button>
          <button onClick={()=>appendChar('5')}>5</button>
          <button onClick={()=>appendChar('6')}>6</button>
          <button onClick={()=>appendChar('7')}>7</button>
          <button onClick={()=>appendChar('8')}>8</button>
          <button onClick={()=>appendChar('9')}>9</button>
          <button onClick={()=>appendChar('0')}>0</button>

          <button onClick={deleteLast}>DEL</button>
          <button onClick={clearAll}>C</button>
          <button onClick={calCulate}>=</button>

        </div>
      </div>
      
    </>
  )
}

export default App
