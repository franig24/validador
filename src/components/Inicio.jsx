import React from 'react';
import '../Estilos/Inicio.scss';
import { ButtonEntrar} from '../components/Button';


const Inicio = () =>{
    return (
        <div className="ui container">

            <div className="ui equal width grid">
                <div className="column">
                </div>
                <div className="eight wide column">
                    <div className="ui segment">

                        <h1 className="header-inicio">Bienvenido
                            <div>
                                <ButtonEntrar />

                            </div>
                        </h1>

                    </div>
                </div>
                <div className="column">
                </div>
            </div>
            
        </div>
    )
}

export default Inicio