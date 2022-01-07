import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  // 1st argument: what we want to create 
  // React.createElement("h1", {style:{color:"blue"}}, "Heyyyy Everyone!"),

  // use JSX to create elements
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
  // 2nd argument: where we want to put it
  document.getElementById('root')
);
