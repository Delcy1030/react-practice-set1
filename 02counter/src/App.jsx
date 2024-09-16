import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  //let counter=5

const addValue  = () => {
  console.log("clicked",counter)
  //counter=counter+1
  setCounter(counter+1)
}

const removeValue = () => {
  setCounter(counter-1)
}

  return (
    <>
      
      <h1>hello VISHAL</h1>
      <h2>hello Delcy</h2>
      <h3>counter value : {counter}</h3>

      <button  onClick={addValue}>
        add value{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>decrease button{counter}</button>
      <p>footer :{counter} </p>
    </>
  )
}

export default App
