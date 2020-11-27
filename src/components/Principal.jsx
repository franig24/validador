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
                    <p>Algo</p>
                </div>
            </div>
        </div>
        
        
    
        
    )
}

export default Principal