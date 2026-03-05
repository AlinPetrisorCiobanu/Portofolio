import Nav_Bar from "../../components/Nav_Bar"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone ,FaWhatsapp} from "react-icons/fa"

const Contact = () => {

    const contacts = [
        {
            name: "Email",
            value: "alinpetrisorciobanu@outlook.es",
            link: "mailto:alinpetrisorciobanu@outlook.es",
            icon: <FaEnvelope />
        },
        {
            name: "Teléfono",
            value: "+34 673 455 560",
            link: "tel:+34673455560",
            icon: <FaPhone />
        },
        {
            name: "WhatsApp",
            value: "",
            link: "https://wa.me/34673455560?text=Hola%20he%20visto%20tu%20portfolio%20y%20quiero%20hablar%20contigo",
            icon: <FaWhatsapp />
        },
        {
            name: "LinkedIn",
            value: "",
            link: "www.linkedin.com/in/alin-petrisor-ciobanu-979995180",
            icon: <FaLinkedin />
        },
        {
            name: "GitHub",
            value: "",
            link: "https://github.com/AlinPetrisorCiobanu",
            icon: <FaGithub />
        }
    ]

    return (
        <div className="Container">
            <Nav_Bar />

            <main className="contact_main">

                <section className="contact_header">
                    <h1>Contacto</h1>
                    <p>
                        Si quieres hablar sobre un proyecto, colaborar o simplemente
                        saludar, puedes contactarme aquí.
                    </p>
                </section>

                <section className="contact_grid">

                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact_card"
                        >

                            <div className="contact_icon">
                                {contact.icon}
                            </div>

                            <h3>{contact.name}</h3>

                            <p>{contact.value}</p>

                        </a>
                    ))}

                </section>

            </main>
        </div>
    )
}

export default Contact