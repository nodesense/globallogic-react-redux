// first file loaded into browser
// Take React App Component
// Put into <div id="root" tag

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'

// get div element
// get real dom for root, div element
const root = document.getElementById('root');

console.log('loading react');
// put App component into root element
// move virtual dom into real dom
ReactDOM.render(<App />, root);