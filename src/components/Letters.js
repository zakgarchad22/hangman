import React from 'react';
import Letter from './Letter'

const Letters = ({letters , handleLetterInput , hint}) => 
{



  return (
    <div>
      <div>{hint}</div>
      <div>available letters:</div>
      <div>
        {Object.keys(letters).map((letter, index) => (
          <Letter key={letter} letter={letter} active={letters[letter]} onLetterClick={() => handleLetterInput(letter)} />
        ))}
      </div>
    </div>
  )
}


export default Letters;
