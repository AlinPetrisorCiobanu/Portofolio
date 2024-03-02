import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { userDate } from "../userSlice";
import { useNavigate } from "react-router-dom";
import "./Home.scss"

export const Home = () => {
  return (
    <Container id="Main" fluid className="text-center background-warning Container_Body">
      <h1>Home</h1>
      <p>
        Bienvenido a mi portofolio, dentro de no mucho subiré
        todos mis proyectos deployados tanto en github como Vercel.
      </p>
      <p>
        Y con el backend subido en la plataforma de Amazon Web Services a traves
        de una maquina virtual Ubuntu.
      </p>
    </Container>
  );
};
