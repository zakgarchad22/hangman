import React from 'react';


const Letter = ({letter , active, onLetterClick}) => 
{

  const style = {color: active ? "gray" : "black"}
  return (
  
    <span style={style} onClick = {onLetterClick}> 
      {letter}
    </span>
  
  )
 
}


export default Letter;
