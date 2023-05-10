import { useState } from "react"
import "./formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo } = props

const manejarEnvio = (evento) => {
    evento.preventDefault()
console.log("Manejar el envio")
let datosAEnviar = {
    nombre,
    puesto,
    foto,
    equipo
}
registrarColaborador(datosAEnviar)
}

const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
}

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
<Campo 
titulo="nombre" 
placeholder="Ingresar nombre" 
requiered 
valor={nombre} 
actualizarValor={actualizarNombre}
/>

<Campo
titulo="Puesto" 
placeholder="Ingresar puesto" 
requiered 
valor={puesto}
actualizarValor={actualizarPuesto}
/>

<Campo
titulo="Foto" 
placeholder="Ingresar enlace de foto" 
requiered 
valor={foto}
actualizarValor={actualizarFoto}
/>

<ListaOpciones
valor={equipo}
actualizarEquipo={actualizarEquipo}
equipos={props.equipos}
/>

<Boton>
    Crear
</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
<Campo 
titulo="Titulo" 
placeholder="Ingresar titulo" 
requiered 
valor={titulo} 
actualizarValor={actualizarTitulo}
/>

<Campo 
titulo="color" 
placeholder="Ingresar el color en Hex" 
requiered 
valor={color}
actualizarValor={actualizarColor}
type="color"
/>
<Boton>
    Registrar equipo
</Boton>
</form>
    </section>
}

export default Formulario

//---------------------------------------
//evento.preventDefault() 
//evitamos que se recargue el navegador al click en boton
// evento puede aparecer como event o letra "e"