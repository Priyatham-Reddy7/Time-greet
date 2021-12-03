import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [day, setDay] = useState(new Date().getDay())

  //?Runs every second
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
      setDay(new Date().getDay())
    }, 1000);
  });
  
  //?Converting days(0-6) to actual days.
  let today ="";
  switch(day) {
    case 0:
      today = "Sunday";
      break;
    case 1:
      today = "Monday";
      break;
    case 2:
      today = "Tuesday";
      break;
    case 3:
      today = "Wednesday";
      break;
    case 4:
      today = "Thursday";
      break;
    case 5:
      today = "Friday";
      break;
    case 6:
      today = "Saturday";
      break;
  
    default:
      break;
  }

  return (
    <div className="App">
      <h1>Hello Netizens!!</h1>
      <h2>It is {time}, {today}</h2>
      <h2>Have a great day :)</h2>
    </div>
  );
}

export default App;
