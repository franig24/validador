import React from 'react';
import { Link } from 'react-router-dom';
import { version } from '../../package.json';

import '../Estilos/Inicio.scss';
import Validador from './Validador';
import '../Estilos/Principal.scss';

const VistaValidador = () =>{
    return (

        <div className="ui fluid container">
            <br/>
            <div className="ui equal width grid">
                <div className="column">
                </div>
                <div className="eight wide column">
                    <div className="ui segment">
                        <div>
                            <Validador/>
                            <Link to='/Principal'>
                            <p className= "ui center aligned container volver">Volver</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
            <div className="ui right aligned container version-inicio">version: {version}</div>
            
        </div>

    )
}

export default VistaValidador