import Nav_Bar from "../components/Nav_Bar";
import "./../styles/container.css"
import "./../styles/nav_bar_design.css"
import "./../styles/nav_bar_media_querry.css"

const Home = () => {
    return (
        <div className="container">
            <Nav_Bar />
            <main>
                <h1>Mi nuevo proiecto de portofolio</h1>
            </main>
        </div>
    )

}

export default Home;