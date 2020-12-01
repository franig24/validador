import React from 'react';
import { Link } from 'react-router-dom';
import { version } from '../../package.json';

import '../Estilos/Inicio.scss';
import '../Estilos/Principal.scss';


const Inicio = () =>{
    return (
        <div>
            <h1 className="header-inicio fondo">Bienvenido
                <div>
                    <Link to='/Principal'>
                        <button type="button" className="boton-inicio">Entrar</button> 
                    </Link>
                </div>
                <div className="ui right aligned container version-inicio">version: {version}</div>
            </h1>
        </div> 
    )
}

export default Inicio