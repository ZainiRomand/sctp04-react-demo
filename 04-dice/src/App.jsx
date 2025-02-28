import { useState } from 'react'

export default function App() {

  let randomNumber = 1

  const [number, setNumber] = useState(randomNumber)

  return (
    <>
      <h1>Click the box to throw dice</h1>
      <div style={{
        "width": "50px",
        "height": "50px",
        "border": "1px solid black",
        "textAlign": "center"
      }}
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          setNumber(number => number = randomNumber);
        }}
      >
        <br/>
        {number}
      </div>
    </>
  )
}
