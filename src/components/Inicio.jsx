import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Inicio.scss';
import '../Estilos/Principal.scss';


const Inicio = () =>{
    return (
        
        <div className="ui segment  ">

            <h1 className="header-inicio fondo">Bienvenido
                <div>
                    <Link to='/Principal'>
                        <button type="button" className="boton-inicio">Entrar</button> 
                    </Link>
                </div>
            </h1>

        </div>
    

    )
}

export default Inicio