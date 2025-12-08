import {useNavigate} from "react-router-dom"
import { useState } from "react";

const Nav_Bar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const go_to_home = () => {
        navigate("/")
    }

    const go_to_project = () => {
        navigate("/projects")
    }

    const go_to_curriculum = () => {
        navigate("/curriculum")
    }

    const go_to_contacto = () => {
        navigate("/contacto")
    }
    const hamburguer_menu = () => {
        setOpen(!open)
    }

    return(
        <div className="container_nav_bar">
            <div className="nav_bar_hamburguer">
                <div className="hamburguer" onClick={hamburguer_menu}>☰</div>
            </div>
            <div className={open ? "nav_bar_menu opened" : "nav_bar_menu" }>
                <div className="option" onClick={go_to_home}>Inicio</div>
                <div className="option" onClick={go_to_project}>Proyectos</div>
                <div className="option" onClick={go_to_curriculum}>Curriculum</div>
                <div className="option" onClick={go_to_contacto}>Contacto</div>
            </div>
        </div>
    )
}

export default Nav_Bar;