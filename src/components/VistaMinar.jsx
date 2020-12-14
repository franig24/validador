import React from 'react';
import Memenu from './memenu';
import { version } from '../../package.json';

import '../Estilos/Inicio.scss';

const VistaMinar = () =>{
    return (
        
        <div className="ui fluid container">
            <div className="ui celled grid ">
                <div className="ui stackable two column grid">
                    <div className="three wide column">
                        <div className="ui segment">
                            <Memenu/>
                        </div>
                    </div>
                    <div className="thirteen wide column">
                        <div className="ui segment">
                            <h1>¿Deseas minar?</h1>
                            <p>Dentro de este sitio web podras verificar tu RUT e ingresar tus datos 
                            personales básicos, sin ningún segundo fin, no se preocupe, no le pasara nada.</p>
                            <p>Recuerde sonreir y romper el sistema</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="ui right aligned container version-inicio">version: {version}</div>
        </div>

        
        
    )
}

export default VistaMinar