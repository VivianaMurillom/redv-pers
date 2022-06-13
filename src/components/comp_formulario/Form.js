import "./Form.css"
import { useState } from "react";

function Formulario(){

    const [info,setInfo]=useState({id:"",representante:"",correo:"",telefono:"",mensaje:""});

    return(
        <main className="body-form">
            <h1>Llena este formulario y te contactamos</h1>
        <form>
            <label>Nombre</label>
            <input 
            name="nombre"
            placeholder="Colectivo, fundación o colegio"
            type="text"
            value={info.nombre}/>
            <label>Representante</label>
            <input 
            name="representante"
            placeholder="Escribe tu nombre"
            type="text"
            value={info.representante}/>
            <label>Correo</label>
            <input 
            name="correo"
            placeholder="Correo electrónico"
            type="email"
            value={info.correo}/>
            <label>Número de télefono</label>
            <input 
            name="telefono"
            placeholder="Escribe un número de contacto"
            type="number"
            value={info.telefono}/>
            <label>Mensaje</label>
            <input 
            name="mensaje"
            placeholder="Déjanos tu mensaje"
            type="textarea"
            value={info.mensaje}/>
			<label className="check">
				Recuerda que al enviar el formulario aceptas los Terminos y Condiciones
			</label>
            <button type="submit">Enviar</button>
        </form>
        </main>
    );
}
export default Formulario