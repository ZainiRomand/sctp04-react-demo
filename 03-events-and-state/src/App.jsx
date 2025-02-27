export default function App() {

  const boxClicked = () => {
    alert("The box has been clicked")
  }

  const helloMouse = () => {
    alert("Mouse cursor detected")
  }

return (
  <>
    <h1>Events</h1>
    <div style= {{
      "width":"50px",
      "height":"50px",
      "border":"1px solid black"
    }} 
    onClick={boxClicked}
    onMouseEnter={helloMouse}
    ></div>
  
  
  </>
)


}