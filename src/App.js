import React from 'react';
import logo from './logo.svg';
import './App.css';

import Encounter from './Encounter';
import playerInit from './static/playerInit';


function App() {
  return (
    <div className="App">
        <Encounter player={ playerInit } />
    </div>
  );
}

export default App;
