import Nav_Bar from "../../components/Nav_Bar"
import Proyecto from "../../components/proyecto";

const Proyects = () => {
    return (
        <div className="Container">
            <Nav_Bar />
            <main>
                <h1>Proyectos</h1>
            </main>
            <Proyecto name="Proyecto uno, con detalles aparte" 
            detail="Esto se pasa como detalle complementario" 
            link="https://github.com/AlinPetrisorCiobanu/Henesis" />
        </div>
    )
}
export default Proyects;