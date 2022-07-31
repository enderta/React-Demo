import React from 'react'

const Counter = () => {
  //change background color of the counter to red when clicked plus button
  const [count, setCount] = React.useState(0)
  const [color, setColor] = React.useState('#fff')
  const [backgroundColor, setBackgroundColor] = React.useState('#fff')

  const handleClick = () => {
    setCount(count + 1)
    setColor('#fff')
    setBackgroundColor('#ff0000')
  }

  //change background color of the counter to blue when clicked minus button
  const handleClick2 = () => {
    setCount(count - 1)
    setColor('#fff')
    setBackgroundColor('#0000ff')
  }

  //change background color of the counter to white when clicked reset button
  const handleClick3 = () => {
    setCount(0)
    setColor('#000')
    setBackgroundColor('#fff')
  }



  return (
   <>
   <div className="counter"       style={{
        
      }} >
    <div className="counter-container" style={{backgroundColor: backgroundColor,
        width: '100px',
        height: '100px'}}>
    
      <div >
        <button onClick={handleClick} style={{backgroundColor: backgroundColor,
        width: '100px',
        height: '100px'}}>+</button>
        <button onClick={handleClick2} style={{backgroundColor: backgroundColor,
        width: '100px',
        height: '100px'}}>-</button>
        <button onClick={handleClick3} style={{backgroundColor: backgroundColor,
        width: '100px',
        height: '100px'}}>Reset</button>
      </div>
      <div className="counter-text" >
        {count}
      </div>
    </div>
    </div>

   </>
  )
}

export default Counter