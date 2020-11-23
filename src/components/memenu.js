import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Memenu extends Component {
 // state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const navStyle = {
        color: 'Black'
    };
   // const { activeItem } = this.state

    return (
      <Menu inverted vertical>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>
                        Inicio
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-links">
                {/* <Link style={navStyle} to='/Perfil'> */}
                    <li>
                        Validador de RUT
                    </li>

                {/* </Link> */}
                
            </ul>
            <ul className="nav-links">
                {/* <Link style={navStyle} to='/Formulario'> */}
                    <li>
                        Formulario
                    </li>

                {/* </Link> */}
                
            </ul> 
 
      </Menu>
    )
  }
}