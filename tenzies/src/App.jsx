import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './components/Die'
import './App.css'


function App() {

  const [dice, setDice] = useState(newDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{
    const areHeld = dice.every(die => die.isHold === true)
    const areSameValue = dice.every(die => die.value === dice[0].value)
    if (areHeld && areSameValue){
      setTenzies(true)
    }
  }, [dice])

  function newDice(){
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({key: nanoid(), value: Math.ceil(Math.random()*6), isHold: false})
    }
    return newDice
  }

  function rollDice(){
    if (tenzies){
      setTenzies(false)
      setDice(newDice())
    } else {
      setDice(prevDice => prevDice.map(die => {
        return !die.isHold ? ({
          ...die,
          value: Math.ceil(Math.random()*6),
          key: nanoid()
        }) : die
      }))
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.key === id ? ({
        ...die,
        isHold: !die.isHold
      }) : die
    }))
  }

  const diceElements = dice.map((die) => <Die key={die.key} id={die.key} value={die.value} isHold={die.isHold} holdDice={holdDice}/>)

  return (
    <main>
      {tenzies && <Confetti />}
      <div className='tenzies'>
        <h1 className='tenzies-title'>Tenzies</h1>
        <p className='tenzies-body'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className='dice'>
          {diceElements}
        </div>

        <button className='tenzies-button' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}

export default App
