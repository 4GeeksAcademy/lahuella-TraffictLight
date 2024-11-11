import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");
  const toggleColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else {
      setColor("red");
    }
  };

  return (
    <div className="full-screen">
      <div className="traffic-light-container">
        <div onClick={() => setColor("red")}className={`light red ${color === "red" ? "on" : ""}`}></div>
        <div onClick={() => setColor("yellow")}className={`light yellow ${color === "yellow" ? "on" : ""}`}></div>
        <div onClick={() => setColor("green")}className={`light green ${color === "green" ? "on" : ""}`}></div>
      </div>
      <button className="toggle-button" onClick={toggleColor}>Cambiar color</button>
    </div>
  );
}

export default TrafficLight;