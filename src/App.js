import React from 'react';
import logo from './logo.svg';
import './App.css';

import Encounter from './Encounter';

function App() {
  const testPlayer = {
      stats: {
          acc: 10,
          eva: 10,
          str: 10,
          def: 10,
          mxh: 10
      }
  };
  return (
    <div className="App">
        <Encounter player={ testPlayer } />
    </div>
  );
}

export default App;
