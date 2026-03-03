import Nav_Bar from "../../components/Nav_Bar"
import { useParams } from "react-router-dom";

const Project = () => {
    const {id} = useParams();
    const modules = import.meta.glob("./projects_files/*/data.js", { eager: true });
    const projects = Object.values(modules).map(mod => mod.default);
    const project = projects.find(p => p.id == id);

    if (!project) return <h2>Proyecto no encontrado</h2>;

    return (
        <div className="Container">
            <Nav_Bar />
            <main className="main_project">
                <h1>{project.name} : {project.id}</h1>
                <h2>{project.detail}</h2>
                <h3>{project.description}</h3>
                <a href={project.github}>Repositorio en github</a>
                <a href={project.link_deployment}>Proyecto deployado</a>
                <h3>{project.estado}</h3>
                <div className="project_images">
                    
                {project.images.map((img, index) => (
                    <img key={index} src={img} alt={`${project.name} ${index + 1}`} />
                    ))}
                </div>
            </main>
        </div>
    )
}
export default Project;