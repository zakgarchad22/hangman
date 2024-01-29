
const Score = ({ score }) => {

  const setColor = () => {
    if (score > 80 )
      {
      return "green"
      }
    else if(50 < score < 80)
      {
      return "blue"
      }
    else if (0 < score < 50) 
      {
      return "red"
      }
  }
  const color = setColor()
  return (
    <div>

      <p style = {{ color : color }}>{score}</p>
    </div>
  )
}



export default Score;
