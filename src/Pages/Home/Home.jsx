import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { userDate } from "../userSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <Container fluid className="text-center background-warning">
      <h1>Home</h1>
      <p>
        Bienvenido a mi interfaz de usuarios, dentro de no mucho se subiran
        todos mis proyectos deployados tanto en github como Vercel.
      </p>
      <p>
        Y con el backend subido en la plataforma de Amazon Web Services a traves
        de una maquina virtual Ubuntu.
      </p>
    </Container>
  );
};
