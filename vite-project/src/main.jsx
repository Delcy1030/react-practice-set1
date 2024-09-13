import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return(
    <div>
        <h1>custom app</h1>
    </div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_black'>Visit google</a>
)

const anotherUser="chai aur react"

const reactElement= React.createElement(
  'a',
  {href: 'https:/google.com',target: 'click me to visit google'},
  'click me to visit gogle',
  anotherUser

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  < App />
)
