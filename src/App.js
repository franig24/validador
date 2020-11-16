import React from 'react';
import './App.css';
import './components/Validador';
import 'semantic-ui-css/semantic.min.css'

import Validador from './components/Validador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Validador valor=""/>
      </header>
    </div>
  );
}

export default App;
