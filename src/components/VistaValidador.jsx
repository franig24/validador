import React from 'react';

import { Link } from 'react-router-dom';

import Validador from './Validador';

const VistaValidador = () =>{
    return (

        <div className="ui container">

            <div className="ui equal width grid">
                <div className="column">
                </div>
                <div className="eight wide column">
                    <div className="ui segment">
                        <div>
                            <Validador/>
                            <Link to='/Principal'>
                            Volver
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
            
        </div>

    )
}

export default VistaValidador