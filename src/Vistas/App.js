import React from 'react';
import '../components/Validador';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Validador from '../components/Validador';
import Inicio from '../components/Inicio';
import Principal from '../components/Principal';

function App() {
  return (
    <Router>
      <div className="ui container">
        <br/>
        <br/>
        <br/>
        <Switch>
          <Route path="/Principal">
            <Principal/>
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
