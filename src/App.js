import { useState } from 'react';
import './App.css';
import audio from "./img/ping-82822.mp3";

function App() {

  const [count, setCount] = useState(0)
  if (count > 99) {
    return setCount(0)
  }
  function playw() {
    setCount(count + 1)
    new Audio(audio).play()
  }

  function name() {
    if(window.confirm("Are you sure") == true){
      setCount(0)
    }
  }
  return (
    <>

      <header>
        <audio src={audio}></audio>
        <div className='big'>
          <button style={{ justifyContent: "center" }} className='btn1'>{count}/{99 - count} <h6 className='h6'>مسبحة</h6></button>
        </div>

        <div className='fd'>
          <button className='btn' onClick={() => playw()} >Add</button>
          <button id='but' className='btn ' onClick={() => name()}>Resert</button>

        </div>

      </header>
    </>
  )
}
export default App;
