import React from 'react'
import "../styles/styles.css"
const { useState, useEffect } = React;
const App = () => {
  const [color, setColor] = useState(false);
  const [word, setWord] = useState("");
  const [box, setBox] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [time, setTime] = useState(null);

  const generateRandomNumber = () => {
    const randomDelay = Math.floor(Math.random() * 6000) + 1000;
    setTimeoutId(
      setTimeout(() => {
        setColor(true);
        setStartTime(new Date().getTime());
      }, randomDelay)
    );
  };

  const handleColorClick = () => {
    if (!color) {
      setWord("It's too early");
      setColor(false);
      setBox(false);
    } else {
      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;
      setWord(`You took ${elapsedTime}ms!`);
    }
    setColor(false);
    setBox(false);

    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const Boxes = () => {
    return (
      <div
        onClick={handleColorClick}
        className={!color ? "redbox" : "greenbox"}
      >
        <p></p>
      </div>
    );
  };

  const eventHandler = () => {
    setBox(true);
    setWord("");
    generateRandomNumber();
  };

  return (
    <>
    <div className='maincontainer'>
      {box ? <Boxes /> : <button  className="custom-button" onClick={eventHandler}>Start Game</button>}
      <div className='word'>{word}</div>
    </div>
    </>
  );
}

export default App