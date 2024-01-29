import React, { useState } from 'react';
import Score from './components/Score';
import Letters from './components/Letters';
import Solution from './components/Solution';
import './App.css'

const Game = () => {
  const startScore = 100

  const letterStatus = () => {
    const status = {}
    for (let i = 65; i < 91; i++) 
    {
      status[String.fromCharCode(i)] = false
    }
    return status
  }

  const wordsAndHints = [
    { word: "FAITH", hint: "Belief and trust in something" },
    { word: "HOPE", hint: "A positive expectation for the future" },
    { word: "CHANGE", hint: "To make something different" },
    { word: "LIGHT", hint: "A source of illumination" },
    { word: "WAVE", hint: "A disturbance in the air or water" },
    { word: "STAR", hint: "A celestial body that emits light" },
    { word: "HEART", hint: "An organ that pumps blood throughout the body" },
    { word: "FLOWER", hint: "A plant with colorful petals" },
    { word: "SEASON", hint: "A time of year with distinct weather patterns" },
    { word: "JOURNEY", hint: "A long distance traveled" },
 
  ]
  const index = Math.floor(Math.random() * wordsAndHints.length)
  const newWord = wordsAndHints[index].word
  const newHint = wordsAndHints[index].hint
  const [word, setWord] = useState(newWord)
  const [hint, setHint] = useState(newHint)
  const [letters, setLetters] = useState(letterStatus)
  const [guessedLetters, setGuessedLetters] = useState([])
  const [score, setScore] = useState(startScore)
  const [isGameOver, setIsGameOver] = useState(false)
  const [gameMessage, setGameMessage] = useState('')


  const handleLetterInput = (letter) => 
  {

    if (guessedLetters.includes(letter) || score <= 0) 
    {
      return
    }

    const newGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newGuessedLetters)



    if(0 >= (score))
    {
      return
    }
    if (word.includes(letter)) 
    {
  
      setScore(score + 10)
    } 
    else 
    {

      setScore(score - 10)
    }   


    const updatedLetters = { ...letters }
    updatedLetters[letter] = true
    setLetters(updatedLetters)

    const isWordGuessed = word.split('').every(l => newGuessedLetters.includes(l))
    if (isWordGuessed) 
    {
      setGameMessage('won')
      setIsGameOver(true)
    } 
    else if (score <= 10) 
    { 
      setGameMessage('lost')
      setIsGameOver(true)
    }



  }

  
  const resetGame = () => {
    const index = Math.floor(Math.random() * wordsAndHints.length)
    const newWord = wordsAndHints[index].word
    const newHint = wordsAndHints[index].hint
    setWord(newWord)
    setHint(newHint)
    setLetters(letterStatus())
    setGuessedLetters([])
    setScore(startScore)
    setIsGameOver(false)
    setGameMessage('')
  }

  return (
    <div className="container">
    
      {!isGameOver && (
        <>
          <Score score={score} />
          <Solution word={word} hint = {hint} guessedLetters={guessedLetters} />
          <Letters handleLetterInput={handleLetterInput} letters={letters} hint = {hint} />
        </>
      )}

      {isGameOver && (
        <div>
          <p>{gameMessage}</p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    
    </div>

  )
}


export default Game
