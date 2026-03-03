import {useNavigate} from "react-router-dom"
import "../assets/styles/container_proyecto.css"

const Proyecto = (parameter) => {
 const  go_to = (link) => {
    console.log(link)
    window.location.href = link;
 }
    return (
        <div className="proyecto" onClick={()=>go_to(parameter.link)}>
            <h1>{parameter.name}</h1>
            <p>{parameter.detail}</p>
        </div>
    )

}

export default Proyecto;