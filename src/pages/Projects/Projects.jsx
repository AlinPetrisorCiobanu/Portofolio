import Nav_Bar from "../../components/Nav_Bar"
import Project_box from "../../components/Project_box";
const modules = import.meta.glob("./projects_files/*/data.js", { eager: true });
const projects = Object.values(modules).map(mod => mod.default);

const Projects = () => {
    return (
        <div className="Container">
            <Nav_Bar />
            <main className="main_proyectos">
                <div className="projects_container">
                {projects.map(project => (
                    <Project_box
                    key={project.id}
                    {...project}
                    />
                ))}
                </div>
            </main>
        </div>
    )
}
export default Projects;