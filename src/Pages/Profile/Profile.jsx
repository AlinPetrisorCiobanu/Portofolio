import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "../../Common/Card/Card";
import "./Profile.scss";

export const Profile = () => {
  return (
    <Container
      id="Main"
      fluid
      className="text-center d-flex justify-content-center design_home"
    ><Row>
    <Col className="espaciador_profile_top"></Col>
</Row>
      <Row>
        <Col>
          <Card />
        </Col>
      </Row>
      <Row>
        <Col className="espaciador_profile"></Col>
      </Row>
      <Row>
        <Col>
          <Container className="design_tech_stack">
            <Row>
              <Col>
                <h1>Tech Stack</h1>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Row className="tech_stacks">
                  <Col>
                    <p>HTML5</p>
                  </Col>
                  <Col>
                    <p>CSS3</p>
                  </Col>
                  <Col>
                    <p>JavaScript</p>
                  </Col>
                  <Col>
                    <p>TypeScript</p>
                  </Col>
                  <Col>
                    <p>MongoDB</p>
                  </Col>
                  <Col>
                    <p>SQL</p>
                  </Col>
                  <Col>
                    <p>Bootstrap</p>
                  </Col>
                  <Col>
                    <p>React</p>
                  </Col>
                  <Col>
                    <p>BootstrapReact</p>
                  </Col>
                  <Col>
                    <p>PHP</p>
                  </Col>
                  <Col>
                    <p>Laravel</p>
                  </Col>
                  <Col>
                    <p>SASS</p>
                  </Col>
                  <Col>
                    <p>Java</p>
                  </Col>
                  <Col>
                    <p>C#</p>
                  </Col>
                  <Col>
                    <p>Docker</p>
                  </Col>
                  <Col>
                    <p>Linux</p>
                  </Col>
                  <Col>
                    <p>Node.js</p>
                  </Col>
                  <Col>
                    <p>Axios</p>
                  </Col>
                  <Col>
                    <p>Redux</p>
                  </Col>
                  <Col>
                    <p>MVC</p>
                  </Col>
                  <Col>
                    <p>POO</p>
                  </Col>
                  <Col>
                    <p>SCRUM</p>
                  </Col>
                  <Col>
                    <p>VUE</p>
                  </Col>
                  <Col>
                    <p>Testing</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="espaciador_profile"></Col>
      </Row>
    </Container>
  );
};
