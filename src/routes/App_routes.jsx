import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Projects from "../pages/Projects/Projects";
import Project from "../pages/Projects/Project";
import Curriculum from "../pages/Curriculum/Curriculum";
import Contact from "../pages/Contacto/Contacto";

const App_routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App_routes;