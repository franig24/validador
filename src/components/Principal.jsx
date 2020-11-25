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
                    algo
                </div>
            </div>
        </div>
        
        
    
        
    )
}

export default Principal