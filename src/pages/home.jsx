import Nav_Bar from "../components/Nav_Bar";

const Home = () => {
    return (
        <div className="Container">
            <Nav_Bar />

            <main className="main_home">

                <section className="hero_home">
                    <h1>
                        Arquitectura y desarrollo
                        <br />
                        de aplicaciones web completas
                    </h1>

                    <h2>
                        Soy <span className="nombre">Alin Petrisor Ciobanu</span>,
                        Fullstack Developer especializado en estructuras limpias,
                        modularidad y escalabilidad.
                    </h2>

                    <p>
                        Construyo sistemas bien organizados, con separación clara
                        de responsabilidades, APIs estructuradas y frontend
                        optimizado en React.
                    </p>
                </section>

                <section className="stack_home">
                    <h3>Stack y herramientas que utilizo</h3>
                    <div className="stack_icons">
                        <div className="stack_item">HTML</div>
                        <div className="stack_item">CSS / SASS</div>
                        <div className="stack_item">JavaScript / TypeScript</div>
                        <div className="stack_item">React</div>
                        <div className="stack_item">Node.js</div>
                        <div className="stack_item">Nodemon</div>
                        <div className="stack_item">PHP / Laravel</div>
                        <div className="stack_item">MongoDB / SQL</div>
                        <div className="stack_item">GitHub</div>
                        <div className="stack_item">Vercel</div>
                        <div className="stack_item">Postman</div>
                        <div className="stack_item">Godaddy</div>
                        <div className="stack_item">AWS</div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Home;