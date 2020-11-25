import React from 'react';
import { validate } from "./rut";
import '../Estilos/Principal.scss';


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

    if(clave === "uvalpo" && click) return (<div>
        <a onClick = {()=>setClick(false)}>Presione aquí</a>
        <br/>
    </div>)

   
    return (<div className="cont-centrado">
 
        <p>Ingresa RUT</p>
        <input type="text" value={rutIngresado} onChange = {change} /> 
        {
            validate(rutIngresado) &&
            (<><div>
                <br></br>
                <input type="password" value={clave} onChange = {ChangePassword}/>
                    <div>
                        <br/>
                        <button type="button" className="myButton" value="text" onClick = {()=>setClick(true)}>Entrar</button> 
                    </div>
            </div></>)

        }
    </div>)
    
}
