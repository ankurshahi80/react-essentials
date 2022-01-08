import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

ReactDOM.render(
  // 1st argument: what we want to create 
  
  // Render a react element
  // React.createElement("h1", {style:{color:"blue"}}, "Heyyyy Everyone!"),

  // use JSX to create elements
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  // </ul>,

  // render a react component
  <App authorized={true}/>,
  // 2nd argument: where we want to put it
  document.getElementById('root')
);
