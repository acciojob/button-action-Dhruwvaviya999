import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [ isVisible, setIsVisible ] = useState(false);
  
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p className={ isVisible ? "show" : "hide" } id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button onClick={() => setIsVisible((prev) => !prev) } id="click">{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App
