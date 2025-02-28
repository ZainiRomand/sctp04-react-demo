import { useState } from 'react'

export default function App() {

  let randomNumber = 1

  const [number, setNumber] = useState(randomNumber)
  const [colour, setColour] = useState("red")

  return (
    <>
      <h1>Click the box to throw dice</h1>
      <div style={{
        "width": "50px",
        "height": "50px",
        "border": "1px solid black",
        "textAlign": "center",
        "color": colour
      }}
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          setNumber(number => number = randomNumber);
          if( randomNumber == 1)
            setColour(colour => colour = "red")
          else if (randomNumber == 6)
            setColour(colour => colour = "green")
          else
            setColour(colour => colour = "black")
        }}
      >
        <br/>
        {number}
      </div>
    </>
  )
}
