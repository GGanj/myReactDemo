import React, { useEffect, useState } from "react";
import "./Hook.scss";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({1: "red", 2: "blue"})

  useEffect(() => {
    console.log('Mount component');
    document.title = `You clicked ${count} times`;
    return () => {
      console.log("Unmount component");
    };
  });

  let x = 0;
  return (
    
    <div className="section">
      <p>you have clicked {count} times, color 1 is {color[1]}, x = {x}</p>
      <button onClick={
        () => {
          setCount(count+1); 
          // x is a new object when re-render
          x = x + 1;
          console.log(count);
          console.log(x);
      }}>
        Add
      </button>
    </div>
  )
}

export default UseStateDemo;