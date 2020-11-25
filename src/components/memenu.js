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

      <Menu vertical>
            <ul className="nav-links">
                <Link style={navStyle} to='/Principal'>
                        Inicio
                </Link>
                
            </ul> 
            <ul className="nav-links">
                <Link style={navStyle} to='/Validador'>
                        Validador de RUT
                </Link> 
                
            </ul>
            <ul className="nav-links">
                <Link style={navStyle} to='/Formulario'>
                        Formulario
                </Link> 
                
            </ul> 
            <ul className="nav-links">
               <Link style={navStyle} to='/' exact> 
                        Salir
                </Link>   
            </ul> 
 
      </Menu>
    )
  }
}