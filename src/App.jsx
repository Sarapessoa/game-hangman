import { useState } from 'react'
import Hangman from './componentes/Hangman'
import Keyboard from './componentes/Keyboard'
import KeyboardListener from './componentes/KeyboardListener'
import './App.css'

function App() {
  let attempt = 4
  return (
    <div>
      <Hangman attempts={attempt} />
      <KeyboardListener/>
      <Keyboard/></div>
  )
}

export default App
