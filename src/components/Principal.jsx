import React from 'react';
import '../Estilos/Principal.scss';
import Memenu from './memenu';


const Principal = () =>{
    return (

        <div class="ui celled grid">
            <div class="row">
                <div class="three wide column">
                    <Memenu/>
                </div>
                <div class="thirteen wide column">
                    <h1>Bienvenido a Belmingo</h1>
                    <p>Dentro de este sitio web podras verificar tu RUT e ingresar tus datos personales basicos, sin ningun segundo fin, no se preocupe, no le pasara nada.</p>
                </div>
            </div>
        </div>
        
        
    
        
    )
}

export default Principal