import React from 'react';
import { validate } from "./rut";
import '../Estilos/validador.scss';
import Header from './Header';


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
        <p className="ui center aligned container">Presione aquí para probar otro RUT</p>
        <a onClick = {()=>setClick(false)}>
        <img src='https://steamuserimages-a.akamaihd.net/ugc/966475625366163496/3C7ACA1F0D22744377810A4082713568A23FF3D6/' className="ui medium centered image ui medium circular image"/>
        </a><br/>
    </div>)

   
    return (<div className="centrado-validador">
 
        <Header/>
        <p>Ej: 12345678k</p>
        <p>Clave: uvalpo</p>
    
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
