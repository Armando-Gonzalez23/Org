import { useState } from "react"
import "./miOrg.css"
const MiOrg = (props) => {
//Estado - hooks
//useState utiliza el estado
//useState()
//const [nombreVariable,funcionActualiza] = useState(valorInicial)
//const [nombre,actualizarNombre] = useState()


/*const [mostrar,actualizarMostrar] = useState(true)
     const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/


    return <section className="orgSection">
<h3 className="title">Mi organizacion</h3>
<img src="/img/Botão add-01 1.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg