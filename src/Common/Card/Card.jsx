import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card.scss";

export const Card = () => {
  return (
    <Container className="card_design">
      <Row>
        <Col>
          <Row>
            <Col>
              <h1>Alin Petrisor Ciobanu</h1>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p>email : alinpetrisorciobanu@outlook.es</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Phone : 673455560</p>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <button>Linkedin</button>
            </Col>
            <Col>
              <button>Github</button>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
