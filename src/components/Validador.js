import React from 'react';
import { validate } from "./rut";


export default function Validador(params) {

    const [rutIngresado, setRutIngresado] = React.useState(params.valor);
    const[clave, setClave] = React.useState("");
    const[click, setClick] = React.useState(false);

    const change = (e)=>{
        setRutIngresado(e.target.value)
    }
    const ChangePassword = (e)=>{
        setClave(e.target.value)
    }

    if(clave === "uvalpo" && click) return <a onClick = {()=>setClick(false)}>Presione aquí</a>

   
    return (<div>
        <h1>Bienvenido</h1>
        <p>Ingresa RUT</p>
        <input type="text" value={rutIngresado} onChange = {change} /> 
        {
            validate(rutIngresado) &&
            (<><div>
                <br></br>
                <input type="password" value={clave} onChange = {ChangePassword}/>
                    <div>
                        <br></br> 
                        <button type="button" class="btn btn-primary" value="text" onClick = {()=>setClick(true)}>Entrar</button>
                    </div>
            </div></>)

        }
    </div>)
    
}
