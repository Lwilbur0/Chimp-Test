import ChimpTest from "./ChimpTest";
import './ChimpTest.css'
import './App.css';
import { render } from "@testing-library/react";

function App() {
  let counter = 1;
  function createButtons() {
    var myButtons = [];
    for (let i = 0; i < counter; i++) {
      var but = <button
                    style={"color:blue"} 
                    onClick={i => createButtons()}> 
                    i
                </button>
      const randomLeftValue = Number.parseInt(Math.random() * (1000 - 10) + 10);
      const randomTopValue =  Number.parseInt(Math.random() * (1000 - 10) + 10);
      but.style.top = `${randomLeftValue}px`;
      but.style.left = `${randomTopValue}px`;
      myButtons.push(but)
      counter++;
    }
    console.log("yo")
    render(); {
      return (
        <div>{myButtons }</div>
      );
    }
    // const button = document.querySelector("button");
    // const randomLeftValue = Number.parseInt(Math.random() * (1000 - 10) + 10);
    // const randomTopValue =  Number.parseInt(Math.random() * (1000 - 10) + 10);
    // button.style.top = `${randomLeftValue}px`;
    // button.style.left = `${randomTopValue}px`;
  }
  function newButton(data) {
    return (
      <button 
          onClick={() => createButtons(data.label)}> //pass parameter for callback here if binding isn't used
          data.name
      </button>
  );
  }
  return (
    <>
    <ChimpTest />
    {/* <div>{myButtons }</div> */}
    <button onClick= {createButtons}>Start</button>
    </>
  )
}

export default App;
