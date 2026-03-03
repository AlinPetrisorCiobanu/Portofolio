import Nav_Bar from "../components/Nav_Bar";

const Home = () => {
    return (
        <div className="Container">
            <Nav_Bar />
            <main className="main_home">
                <section className="encabezado_home">
                    <h1>Bienvenido a mi portfolio</h1>
                    <h2>Soy <span className="nombre">Alin Petrisor Ciobanu</span></h2>
                </section>

                <section className="descripcion_home">
                    <p>* Aquí podrás explorar todos mis proyectos, desde los más recientes hasta los primeros que desarrollé.</p>
                    <p>* Haz clic en cualquier proyecto para ver su página individual con todos sus detalles y documentación.</p>
                    <p>* Ten en cuenta que no todos los proyectos están completamente actualizados o desplegados en Vercel, aunque la mayoría sí.</p>
                </section>
            </main>
        </div>
    )

}

export default Home;