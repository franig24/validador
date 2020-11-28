import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { version } from '../../package.json';

import Inicio from '../components/Inicio';
import Principal from '../components/Principal';
import VistaFormulario from '../components/VistaFormulario';
import VistaValidador from '../components/VistaValidador';

function App() {
  return (
    <Router>
      <div className="ui container">
        <br/>
        <br/>
        <br/>
        <Switch>
          <Route path="/Formulario">
            <VistaFormulario/>
          </Route>
          <Route path="/Validador">
            <VistaValidador/>
          </Route>
          <Route path="/Principal">
            <Principal/>
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
        <div className="ui right aligned container">version: {version}</div>
      </div>
    </Router>

  );
}

export default App;
