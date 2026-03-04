import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav_Bar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const goTo = (route) => {
        setOpen(false); // cierra el menú al navegar
        navigate(`/${route}`);
    };

    return (
        <nav className="navbar">
            <div className="nav_inner">

                {/* Branding / Logo */}
                <div className="logo" onClick={() => goTo("")}>
                    APC
                </div>

                {/* Botón hamburguesa */}
                <div 
                    className={`hamburguer ${open ? "active" : ""}`} 
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </div>

                {/* Menú */}
                <ul className={`menu ${open ? "opened" : ""}`}>
                    <li onClick={() => goTo("")}>Inicio</li>
                    <li onClick={() => goTo("projects")}>Proyectos</li>
                    <li onClick={() => goTo("curriculum")}>Curriculum</li>
                    <li onClick={() => goTo("contacto")}>Contacto</li>
                </ul>

            </div>
        </nav>
    );
};

export default Nav_Bar;