import { useState } from 'react'


export default function App() {
  const [prevCount, setCount] = useState(0)
  const [leftBoxColour, setLeftBoxColour] = useState("blue")
  const [rightBoxColour, setRightBoxColour] = useState("blue")

  const clickDown = () => {
    setCount(prevCount => prevCount - 1)
  }

  const clickUp = () => {
    setCount(prevCount => prevCount + 1);
  }


  return (
    <>
      <table>
        <tr>
          <td>
            <div style={{
              "width": "50px",
              "height": "50px",
              "border": "1px solid black",
              "backgroundColor": leftBoxColour
            }}
              onClick={() => {
                if (prevCount > 0) {
                  clickDown()
                  setLeftBoxColour("green")
                } else {
                  setLeftBoxColour("red")
                }

              }}
              onMouseLeave={() => {
                setLeftBoxColour("blue")
              }}
            >
            </div>
          </td>
          <td>
            <div style={{
              "width": "50px",
              "height": "50px",
              "border": "1px solid black",
              "backgroundColor": rightBoxColour
            }}
              onClick={() => {
                if (prevCount < 10) {
                  clickUp()
                  setRightBoxColour("green")
                } else {
                  setRightBoxColour("red")
                }
              }}
              onMouseLeave={() => {
                setRightBoxColour("blue")
              }}
            >
            </div>
          </td>
          <td>
            <div style={{
              "fontSize": `${20 + prevCount * 2}px`,
            }}
            >
              {prevCount}
            </div>
          </td>
        </tr>
      </table>
      {prevCount % 2 == 0 ? <p>Number is even</p> : null}
    </>
  )
}
