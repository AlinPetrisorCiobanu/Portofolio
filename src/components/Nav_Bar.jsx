import {useNavigate} from "react-router-dom"
import { useState } from "react";

const Nav_Bar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const go_to= (route) => {
        navigate(`/${route}`)
    }

    const hamburguer_menu = () => {
        setOpen(!open)
    }

    return(
        <nav className="navbar">
            <div className="hamburguer" onClick={hamburguer_menu}>☰</div>
            <ul className={open ? "menu opened" : "menu" }>
                <li onClick={()=>go_to("")}>Inicio</li>
                <li onClick={()=>go_to("projects")}>Proyectos</li>
                <li onClick={()=>go_to("curriculum")}>Curriculum</li>
                <li onClick={()=>go_to("contacto")}>Contacto</li>
            </ul>
        </nav>
    )
}

export default Nav_Bar;