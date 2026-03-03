import Nav_Bar from "../../components/Nav_Bar"
import Proyecto from "../../components/proyecto";

const Proyects = () => {
    return(
        <>
            <Nav_Bar />
            <Proyecto name="Proyecto uno, con detalles aparte" detail="Esto se pasa como detalle complementario" link="https://github.com/AlinPetrisorCiobanu/Henesis"/>
        </>
    )
}
export default Proyects;