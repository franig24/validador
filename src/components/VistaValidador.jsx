import React from 'react';
import { Link } from 'react-router-dom';
import { version } from '../../package.json';
// import { Grid, Image } from 'semantic-ui-react'

import '../Estilos/Inicio.scss';
import Validador from './Validador';
import '../Estilos/Principal.scss';

const VistaValidador = () =>{
    return (
        <div>
            

        <div className="ui fluid container">
            <br/>
            <div className="ui center aligned middle aligned grid">

                <div className="ten wide column" >
                    <div className="ui segment">
                        <div>
                            
                            <Validador/>
                            <Link to='/Principal'>
                            <p className= "ui center aligned container volver">Volver</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="ui right aligned container version-inicio">version: {version}</div>
            
        </div>
        </div>
    )
}

export default VistaValidador


// <Grid  stackable columns={2}>
//     <Grid.Row>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>

//     </Grid.Row>

//   </Grid>