import React from 'react';
import { Link } from 'react-router-dom';
import { version } from '../../package.json';

import '../Estilos/Inicio.scss';
import '../Estilos/Principal.scss';
import Formulario from './Formulario';

const VistaFormulario = () =>{
    return (
        <div className="ui fluid container">
            <br/>
            <div className="ui segment">
                <div>
                    <Formulario/>
                </div>
                <br/>
                <Link to='/Principal'>
                    <p class="ui center aligned container volver">Volver</p>
                </Link>
            </div>
            <div className="ui right aligned container version-inicio">version: {version}</div>

        </div>
    )
}

export default VistaFormulario