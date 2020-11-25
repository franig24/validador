import React from 'react';
import '../Estilos/Principal.scss';
import Formulario from './Formulario';
import { Link } from 'react-router-dom';

const VistaFormulario = () =>{
    return (
        <div>
            <div className="ui segment">
                <div>
                    <Formulario/>
                </div>
            </div>

            <Link to='/Principal'>
            Volver
            </Link>

        </div>
    )
}

export default VistaFormulario