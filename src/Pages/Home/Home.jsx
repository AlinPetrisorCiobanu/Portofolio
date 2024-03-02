import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";

export const Home = () => {
  return (
    <Container
      id="Main"
      fluid
      className="text-center background-warning design_home"
    >
      <Row>
        <Col>
          <h1>Home</h1>
        </Col>
      </Row>
      <hr />
      <Row className="d-flex">  
        <Col className="border_lateral text_design">
          <p>
            Bienvenido a mi portofolio, dentro de no mucho subiré todos mis
            proyectos deployados tanto en github como Vercel.
          </p>
        </Col>
        <Col className="text_design">
          <p>
            Y con el backend subido en la plataforma de Amazon Web Services a
            traves de una maquina virtual Ubuntu.
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text_design">
          <p>
            En la barra de navegación hay diferentes enlaces , al perfil de usuario , proyectos , una parte de contacto y un login personalizado para poder subir diferentes archivos sin tener la necesidad de abrir el codigo cada vez que se va incorporar un nuveo proyecto a la plantilla o para cambiar algunos detalles en el perfil de usuario.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
