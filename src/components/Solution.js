import React from 'react';

const Solution = () => {
  const underscores = Array(4).fill('_')

  return (
    <div>
     
      {underscores.map((underscore, index) => (
        <span key={index}> {underscore} </span>
      ))}
       <div><em>Your ideal mood when coding.</em></div>
    </div>
  )
}

export default Solution
