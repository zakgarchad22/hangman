import React, { useState } from 'react';
import Score from './components/Score';
import Letters from './components/Letters';
import Solution from './components/Solution';

const Game = () => {
  const [guessesLeft, setGuessesLeft] = useState(7)

  const handleLetterInput = (letter) => 
  {
    if (letter === 'A') 
    {
      alert('Correct! You have ' + guessesLeft + ' guesses left.')
    }
    else 
    {
      alert('Incorrect. You have ' + guessesLeft + ' guesses left.')
      setGuessesLeft(guessesLeft - 1)
    }
  }

  return (
      <>
        <Score guessesLeft={guessesLeft} />
        <Solution />
        <Letters handleLetterInput={handleLetterInput} />

      </>


  )
}


export default Game
