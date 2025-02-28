import { useState } from 'react'

export default function App() {

  const [feel, setFeel] = useState("")
  const [prevCount, setCount] = useState(0)


  const click = () => {
    setCount(prevCount => prevCount + 1);
  }

  function ThatTickles() {
    return (
      setFeel("that tickles!")
    )
  }

  function TickleStop() {
    return (
      setFeel("")
    )
  }

  return (
    <>
      <h1>TickleBox</h1>
      <div style={{
        "width": "50px",
        "height": "50px",
        "border": "1px solid black"
      }}
        onMouseDown={() => {
          click()
        }}
        onMouseOver={() => {
          ThatTickles()
        }}
        onMouseLeave={() => {
          TickleStop()
        }}
      >
        {prevCount}
      </div >
      <p>{feel}</p>
    </>
  )
}
