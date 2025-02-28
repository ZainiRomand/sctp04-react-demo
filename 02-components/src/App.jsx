
import Alert from "./Alert"
import apples from "./assets/apples.jpg"
import oranges from "./assets/oranges.jpg"
import cherries from "./assets/cherries.jpg"
import kiwis from "./assets/kiwis.jpg"


export default function App() {

  function sayHello() {
    return <h2>Hello How Are You?</h2>
  }

  function BorderImageFrame(props) {
    return (
      <img src={props.picture}/>
    )
  }

  return (
    <>
      <h1>Hello World</h1>
      {
        sayHello()
      }

      {/* Render an instance of the Alert component */}
      <Alert message="Danger ahead" bgcolor="pink"/>
      <Alert message="Withdrawal amount exceeds bank account's balance" bgcolor="orange"/>
      <Alert message="Download successful" bgcolor="lightgreen"/>
      <BorderImageFrame picture={apples}/>
      <BorderImageFrame picture={oranges}/>
      <BorderImageFrame picture={cherries}/>
      <BorderImageFrame picture={kiwis}/>
   </>
  )
}