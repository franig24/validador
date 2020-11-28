import React from 'react';
import { Link } from 'react-router-dom';

import Validador from './Validador';
import '../Estilos/Principal.scss';

const VistaValidador = () =>{
    return (

        <div className="ui container">

            <div className="ui equal width grid">
                <div className="column">
                </div>
                <div className="five wide column">
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
            
        </div>

    )
}

export default VistaValidador