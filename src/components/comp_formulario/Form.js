import "./Form.css"
import { useState } from "react";

function Formulario(){

    const expresiones = {
		nombreyrepresen: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,10}$/ // 7 a 10 numeros.
	}

    const [estado, cambiarEstado] = useState({nombre:'', representante:'', correo:'', telefono:'', mensaje:''});

    // const [nombreField, setNombre] = useState({ value: "", hasError: false,});
    // const [representanteField, setRepresentante] = useState({ value: "", hasError: false,});
    // const [correoField, setCorreo] = useState({ value: "", hasError: false,});
    // const [telefonoField, setTelefono] = useState({ value: "", hasError: false,});
    // const [mensajeField, setMensaje] = useState({ value: "", hasError: false,});


    function handleSubmit(evt) {
        evt.preventDefault();
      }

    function handleChange(evt) {

    const { target } = evt;
    const { name, estados } = target;

    const newValues = {
        ...estado,
        [name]: estados,
    };

    cambiarEstado(newValues);
    }

    return(
        <main className="body-form">
            <h1>Llena este formulario y te contactamos</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
            id="nombre"
            name="nombre"
            placeholder="Colectivo, fundación o colegio"
            type="text"
            expresionRegular={expresiones.nombreyrepresen}
            estados={estado.nombre}
            onChange={handleChange}/>
            <p className="mensaje-error">El nombre solo puede contener letras y espacios.</p>
            <label>Representante</label>
            <input 
            id="representante"
            name="representante"
            placeholder="Escribe tu nombre"
            type="text"
            expresionRegular={expresiones.nombreyrepresen}
            estados={estado.representante}
            onChange={handleChange}/>
            <p className="mensaje-error">El representante solo puede contener letras y espacios.</p>
            <label>Correo</label>
            <input 
            id="correo"
            name="correo"
            placeholder="Correo electrónico"
            type="email"
            expresionRegular={expresiones.correo}
            estados={estado.correo}
            onChange={handleChange}/>
            <p className="mensaje-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
            <label>Número de télefono</label>
            <input 
            id="telefono"
            name="telefono"
            placeholder="Escribe un número de contacto"
            type="number"
            expresionRegular={expresiones.telefono}
            estados={estado.telefono}
            onChange={handleChange}/>
            <p className="mensaje-error">El telefono solo puede contener numeros y el maximo son 10 dígitos.</p>
            <label>Mensaje</label>
            <input 
            id="mensaje"
            name="mensaje"
            placeholder="Déjanos tu mensaje"
            type="textarea"
            estados={estado.mensaje}
            onChange={handleChange}
            />
			<label className="check">
				Recuerda que al enviar el formulario aceptas los Terminos y Condiciones
			</label>
            <button type="submit">Enviar</button>
        </form>
        </main>
    );
}
export default Formulario;