import { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0)
   if(count>99){
    return setCount (0)
   }

  return(
    <>
    
    <div className='big'>
    <button style={{justifyContent:"center"}} className='btn1'>{count}</button> 
    </div>
    
   <div className='fd'>
   <button className='btn' onClick={() => setCount(count+1)}>Add</button>
   </div>

    </>
  )
  }
export default App;
