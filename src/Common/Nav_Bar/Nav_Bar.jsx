import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Nav_Bar.scss";

export const NavBar = () => {
  return (
    <>
      <Container id="NavBar" fluid className="text-center design_navbar">
        <Row className="d-flex justify-content-around align-items-center row_navbar">
          <Col>
            <a>
              <p>Inicio</p>
            </a>
          </Col>
          <Col>
            <Row>
              <Col></Col>
              <Col>
                <a>
                  <p>uno</p>
                </a>
              </Col>
              <Col>
                <a>
                  <p>dos</p>
                </a>
              </Col>
              <Col>
                <a>
                  <p>tres</p>
                </a>
              </Col>
              <Col>
                <a>
                  <p>cuatro</p>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
