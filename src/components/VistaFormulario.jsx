import React from 'react';
import { Link } from 'react-router-dom';

import '../Estilos/Principal.scss';
import Formulario from './Formulario';

const VistaFormulario = () =>{
    return (
        <div>
            <div className="ui segment">
                <div>
                    <Formulario/>
                </div>
                <br/>
                <Link to='/Principal'>
                    <p class="ui center aligned container volver">Volver</p>
                </Link>
            </div>

            

        </div>
    )
}

export default VistaFormulario