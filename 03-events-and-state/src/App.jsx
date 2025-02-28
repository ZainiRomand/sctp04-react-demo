import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(100);
  const [colour, setColour] = useState("blue");

  const boxClicked = () => {
    setCount(count + 1),
    console.log("The box has been clicked")
  }

  const helloMouse = () => {
    alert("Mouse cursor detected")
  }

  return (
    <>
      <h1>Events</h1>
      <div style={{
        "width": "50px",
        "height": "50px",
        "border": "1px solid black",
        "backgroundColor": colour,
        "color": "white"
      }}
        onClick={boxClicked}
        onMouseEnter={() => {
          setColour( "red")
          console.log("Mouse enters the box")
        }}
        onMouseLeave={() => {
          setColour( "blue")
          console.log("Mouse out of the box")
        }}
      >
        {count}
      </div>
    </>
  )


}