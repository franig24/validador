import React from 'react';
import Memenu from './memenu';
import { version } from '../../package.json';

import '../Estilos/Inicio.scss';


const Principal = () =>{
    return (
        
        <div className="ui fluid container">
            <div className="ui celled grid ">
                <div class="ui stackable two column grid">
                    <div class="three wide column">
                        <div class="ui segment">
                            <Memenu/>
                        </div>
                    </div>
                    <div class="thirteen wide column">
                        <div class="ui segment">
                            <h1>Bienvenido a Belmingo</h1>
                            <p>Dentro de este sitio web podras verificar tu RUT e ingresar tus datos 
                            personales básicos, sin ningún segundo fin, no se preocupe, no le pasara nada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // <div className="ui fluid container">
        //     <br/>
        //    <div className="ui celled grid ">
        //         <div className="ui justify aligned middle aligned grid">
        //             <div className=" column">
        //                 <Memenu/>
        //             </div>
        //             <div className="twelve wide column">
        //                 <div className="ui segment">
        //                     <h1>Bienvenido a Belmingo</h1>
        //                     <p>Dentro de este sitio web podras verificar tu RUT e ingresar tus datos 
        //                     personales básicos, sin ningún segundo fin, no se preocupe, no le pasara nada.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> 
        //     <div className="ui right aligned container version-inicio">version: {version}</div>
        
        
    )
}

export default Principal