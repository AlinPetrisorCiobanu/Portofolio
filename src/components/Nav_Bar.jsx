import {useNavigate} from "react-router-dom"

const Nav_Bar = () => {
    const navigate = useNavigate();

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

    return(
        <div className="container_nav_bar">
            <div className="nav_bar_first_option">
                <div className="">a</div>
            </div>
            <div className="nav_bar_menu">
                <div className="option" onClick={go_to_home}>Inicio</div>
                <div className="option" onClick={go_to_project}>Proyectos</div>
                <div className="option" onClick={go_to_curriculum}>Curriculum</div>
                <div className="option" onClick={go_to_contacto}>Contacto</div>
            </div>
        </div>
    )
}

export default Nav_Bar;