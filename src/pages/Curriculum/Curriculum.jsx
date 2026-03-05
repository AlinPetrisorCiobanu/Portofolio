import { useRef, useState } from "react";
import Nav_Bar from "../../components/Nav_Bar"
import { FaLinkedin, FaGithub, FaMoon, FaSun, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import profile_img from "../../assets/img/AlinCb.jpg"

const Curriculum = () => {
    const projects = [
        {
            title: "Portfolio Web Personal",
            description: [
                "Desarrollo profesional con React, modularización de componentes y despliegue en Vercel.",
                "Integración de proyectos y enlaces externos."
            ],
            stack: ["React", "CSS", "JavaScript", "Vercel"]
        },
        {
            title: "Consola Nintendo Switch",
            description: [
                "Remasterización completa con React, SASS y React-Bootstrap.",
                "Diseño 100% responsive y navegación tipo consola con teclado.",
                "Integración API externa (Rick & Morty) y modularización de componentes."
            ],
            stack: ["React", "SASS", "React-Bootstrap", "API REST"]
        },
        {
            title: "MasterMind – Full Stack (En desarrollo)",
            description: [
                "API REST con Node.js, Express y MongoDB para gestión completa de usuarios.",
                "Autenticación y autorización con JWT y encriptación Bcrypt.",
                "CRUD completo con control de roles, paginación y soft delete.",
                "Frontend en desarrollo con lógica interactiva."
            ],
            stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt"]
        }
    ];

    const [darkMode, setDarkMode] = useState(false);
    const cvRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => cvRef.current,
        documentTitle: "AlinPetrisorCiobanuCV",
    });
    return (
        <div className="Container">
            <Nav_Bar />
            <section id="curriculum-final" className={darkMode ? "dark" : "light"}>
                <div className="cv-toggle-print">
                    <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
                        {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Modo Claro" : "Modo Dark"}
                    </button>
                    <a
                        href="/AlinPetrisorCiobanuCV.pdf"
                        download="AlinPetrisorCiobanuCV.pdf"
                        className="print-btn"
                    >
                        <FaFilePdf /> Descargar PDF
                    </a>
                </div>

                <div ref={cvRef}>
                    <motion.div className="cv-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <img src={profile_img} alt="Alin Petrisor Ciobanu" className="cv-photo" />
                        <div className="cv-intro">
                            <h1>Alin Petrisor Ciobanu</h1>
                            <h2>Full Stack Developer</h2>
                            <h3>alinpetrisorciobanu@outlook.es</h3>
                            <div className="cv-links">
                                <a href="https://www.linkedin.com/in/alin-petrisor-ciobanu-979995180" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/alinpetrisor</a>
                                <a href="https://github.com/AlinPetrisorCiobanu" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                            </div>
                        </div>
                    </motion.div>

                    <div className="cv-columns">
                        <motion.div className="left-column" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                            <h3>Stack Tecnológico</h3>
                            <p><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React, React-Bootstrap, SASS</p>
                            <p><strong>Backend:</strong> Node.js, Express, Nodemon, PHP, Laravel, JWT, Bcrypt</p>
                            <p><strong>Bases de datos:</strong> MongoDB, SQL</p>
                            <p><strong>Herramientas:</strong> GitHub, Postman, Vercel, AWS</p>

                            <h3>Idiomas</h3>
                            <ul>
                                <li>Rumano: Nativo</li>
                                <li>Español: Bilingüe</li>
                                <li>Inglés: B1</li>
                            </ul>

                            <h3>Soft Skills</h3>
                            <ul>
                                <li>Trabajo en equipo</li>
                                <li>Comunicación</li>
                                <li>Resolución de problemas</li>
                            </ul>
                        </motion.div>
                        <motion.div className="right-column" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                            <h3>Proyectos Destacados</h3>
                            {projects.map((proj, i) => (
                                <motion.div key={i} className="project-card" whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <h4>{proj.title}</h4>
                                    <ul>
                                        {proj.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
                                    </ul>
                                    <p><strong>Stack:</strong> {proj.stack.join(", ")}</p>
                                </motion.div>
                            ))}

                            <h3>Formación</h3>
                            <ul>
                                <li>Desarrollo de Aplicaciones con Tecnologías Web (IFCD0210) – Grupo Colon (Nov 2025 – Abr 2026)</li>
                                <li>Bootcamp Full Stack Developer – GeeksHubs Academy (Sep 2023 – Dec 2023)</li>
                                <li>Confección y Publicación de Páginas Web – Alcalá Desarrollo (2022)</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Curriculum;