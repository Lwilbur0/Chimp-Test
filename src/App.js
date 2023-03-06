import React, { useEffect, useState } from "react"; 
import './ChimpTest.css'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [nextButtonNumber, setNextButtonNumber] = useState(1);
  const [fail, setFail] = useState(false);
  const [button2Visible, setButton2Visible] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(false);
  const [click, setClick] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [buttonColor, setButtonColor] = useState("white");

  var myButtons = [];
  function isValidPosition(num, usedValues) {
    for (let i = 0; i < usedValues.length; i++) {
      if (Math.abs(usedValues[i] - num) < 50) {
        return false;
      }
    }
    return true;
  }
  function createButtons() {
    myButtons = [];
    var usedX = [];
    var usedY = [];
    let randomLeftValue = 0;
    let randomTopValue = 0;
    if (Array.isArray(myButtons) && myButtons.length > 0) {
    myButtons.splice(0, myButtons.length)
    }


    for (let i = 1; i < counter + 1; i++) {
      while (true) {
        randomLeftValue = Number.parseInt(Math.random() * (650 - 10) + 400);
        if (isValidPosition(randomLeftValue, usedX)) {
          usedX.push(randomLeftValue);
          break;
        }
      }
      while (true) {
        randomTopValue =  Number.parseInt(Math.random() * (400 - 10) + 150);
        if (isValidPosition(randomTopValue, usedY)) {
          usedY.push(randomLeftValue);
          break;
        } }
      const className = true === clickedButtonIndex ? 'button-19 clicked' : 'button-19';
      var but = <div key ={i}>
        {button2Visible && 
                <button
                    className ={className}
                    role = "button"
                    style={{top: `${randomTopValue}px`, left: `${randomLeftValue}px`, color: buttonColor, maxWidth: '0px'}} 
                    onClick={() => setClick(i)}
                    id = {i}
                    key={i}> 
                    {i}
                </button> }
                </div>
      myButtons.push(but)
    }
    return myButtons
  }
  useEffect(() => {
    setButtons(createButtons());
  }, [counter]);
  useEffect(() => {
    console.log(nextButtonNumber);
  }, [nextButtonNumber]);
  useEffect(() => {
    if (fail) {
      setButtons([]);
    }
  }, [fail]);
  useEffect(() => {
    if (click != 0) {
      buttonClick(click);
    }
  }, [click]);
  
  function buttonClick(buttonNumber) {
    if (buttonNumber === counter && buttonNumber === nextButtonNumber) {
      console.log("done");
      setNextButtonNumber(1);
      setCounter(counter + 1);
      setClickedButtonIndex(false);
      setButtons(createButtons());
      setClick(0);
    }
    else if (buttonNumber === nextButtonNumber) {
      const newButtons = buttons.map((button, index) => {
        if (button.length != 0) {
        return index === buttonNumber - 1 ? [] : React.cloneElement(button, {
          children: React.cloneElement(button.props.children, {
            style: {
              ...button.props.children.props.style,
              color: "#1CB0F6"
            }
          })
        });
      }
        else {
          return [];
        }
      });
      setButtons(newButtons)
      setNextButtonNumber(nextButtonNumber + 1);
      setClickedButtonIndex(true);
    }
    else {
      setButton2Visible(false);
      setFail(true);
    }
  }
  function clickStart() {
    handleButtonClick();
    setCounter(counter + 1);
  }
  const [buttonVisible, setButtonVisible] = useState(true);
  const handleButtonClick = () => {
    setButtonVisible(false);
    setButton2Visible(true);
  };
  return (
    <>
    <div>{buttons}</div>
    <div>
    {buttonVisible && <button onClick= {clickStart} className = "button-19" role = "button" id="button-start">Start</button> }
    {fail ? (
        <div className="fail-screen">
          <h2>You failed!</h2>
          <button className= "button-19" role = "button" id = "retry" onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <div>{buttons}</div>
      )}
    </div>
    </>
  )
}

export default App;
