import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Ingrese Nombre'
            placeholder='Nombre'
          />
          <Form.Field
            control={Input}
            label='Ingrese Apellido'
            placeholder='Apellido'
          />

        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
              control={Input}
              label='Ingrese Correo'
              placeholder='Email'
            />
            <Form.Field
              control={Select}
              label='Elija Género'
              options={options}
              placeholder='Género'
            />
        </Form.Group>
        <Form.Group inline>
          <label>Seleccione Asignatura</label>
          <Form.Field
            control={Radio}
            label='Desarrollo Web'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Arquitectura de SoftWare'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Ambos'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Cuentanos'
          placeholder='Hablanos un poco sobre ti...'
        />
        <Form.Field
          control={Checkbox}
          label='Acepto los termninos'
        />
        <Form.Field control={Button}>Enviar</Form.Field>
      </Form>
    )
  }
}

export default FormExampleFieldControl


