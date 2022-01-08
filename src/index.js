import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

ReactDOM.render(
  // 1st argument: what we want to create 
  <App login="ankurshahi80"/>,
  // 2nd argument: where we want to put it
  document.getElementById('root')
);
