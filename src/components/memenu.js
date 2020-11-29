import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Memenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <Menu vertical>
        <Menu.Item
          name='Validador'
          active={activeItem === 'Validador'}
          onClick={this.handleItemClick}  
        >
          <Link to='/Validador'>
          <Header as='h4'>Validador</Header>
          <p>Verifica tu RUT con la siguiente extensión</p>
          </Link> 
        </Menu.Item>

        <Menu.Item
          name='Formulario'
          active={activeItem === 'Formulario'}
          onClick={this.handleItemClick} 
        >
          <Link to='/Formulario'>
          <Header as='h4'>Formulario</Header>
          <p>Deja tu registro ingresando tus datos aquí</p>
          </Link> 
        </Menu.Item>

        <Menu.Item
          name='Salir'
          active={activeItem === 'Salir'}
          onClick={this.handleItemClick} 
        >
          <Link to='/' exact>
          <Header as='h4'>Salir</Header>
          
          </Link> 
        </Menu.Item>
            
      </Menu>
    )
  }
}

