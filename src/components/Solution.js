import React from 'react';

import './solution.css'

const Solution = ({guessedLetters  , word}) => 
{
  
  return (
    <div>
      {word.split('').map((letter, index) => 
      {
        const isGuessed = guessedLetters.includes(letter)
        return (
          <span key={index} className={isGuessed ? "letter" : "blankSquare"}>
            {isGuessed ? letter : ""}
          </span>
        )
      })}
    </div>
  )
}

export default Solution;
