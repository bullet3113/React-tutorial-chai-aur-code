import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  // let counter = 5;
  const addValue = () => {
    counter++;
    console.log("clicked  " + counter);
    setCount(counter);
  }

  const minusValue = () => {
    if(counter == 0) setCount(0);
    else setCount(counter - 1);
    console.log("clicked " + counter);
    
  }

  return (
    <>
      <h1>Counter value: {counter}</h1>

      <button onClick={addValue}>Add value</button>
      <button onClick={minusValue}>Minus value</button>
    </>
  )
}

export default App
