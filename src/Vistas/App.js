import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Inicio from '../components/Inicio';
import Principal from '../components/Principal';
import VistaFormulario from '../components/VistaFormulario';
import VistaValidador from '../components/VistaValidador';

function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
