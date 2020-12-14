import React from 'react';
import Memenu from './memenu';
import { version } from '../../package.json';

import '../Estilos/Inicio.scss';


const Principal = () =>{
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
                        <div class="ui segment">
                            <h1>Bienvenido a Belmingo</h1>
                            <p>Dentro de este sitio web podras verificar tu RUT e ingresar tus datos 
                            personales básicos, sin ningún segundo fin, no se preocupe, no le pasara nada.</p>
                            <p>Recuerde sonreir y romper el sistema</p>
                            <div class="embed-responsive embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wO6f3Zk9Kfg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui right aligned container version-inicio">version: {version}</div>
        </div>

        
        
    )
}

export default Principal