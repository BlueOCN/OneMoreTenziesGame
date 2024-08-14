import { useState } from 'react'
import Die from './components/Die'
import './App.css'


function App() {

  const [dice, setDice] = useState(newDice())

  function newDice(){
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random()*6))
    }
    return newDice
  }

  function rollDice(){
    setDice(newDice())
  }

  const diceElements = dice.map((die, index) => <Die key={index} value={die}/>)

  return (
    <main>
      <div className='tenzies'>
        <h1 className='tenzies-title'>Tenzies</h1>
        <p className='tenzies-body'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className='dice'>
          {diceElements}
        </div>

        <button className='tenzies-button' onClick={rollDice}>Roll</button>
      </div>
    </main>
  )
}

export default App
