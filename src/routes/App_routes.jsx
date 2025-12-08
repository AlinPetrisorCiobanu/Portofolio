import { BrowserRouter, Routes, Route } from "react-router-dom";

import Proyects from "../pages/Proyectos/Proyectos";
import Home from "../pages/home";
import Curriculum from "../pages/Curriculum/Curriculum";
import Contact from "../pages/Contacto/Contacto";

const App_routes = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Proyects />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App_routes;