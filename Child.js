// Child.js
import React, { useState } from "react";

function Child(props) {

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    props.sendData(inputValue);   // Sending data to Parent
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
}

export default Child;