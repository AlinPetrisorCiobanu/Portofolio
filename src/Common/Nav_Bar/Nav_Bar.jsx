import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./Nav_Bar.scss"

export const NavBar = () => {
    let nameProfile = "nombre"
  return (
    <>
      <Container
        fluid
        className="text-center design_navbar"
      >
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <h1>IMG</h1>
          </Col>
          <Col>
            <Row>
              <Col>
                <h1>2</h1>
              </Col>
              <Col>
                <h1>3</h1>
              </Col>
              <Col>
                <h1>4</h1>
              </Col>
            </Row>
          </Col>
          <Col>
            <DropdownButton title={nameProfile} id="bg-nested-dropdown" className="design_dropDownButton">
              <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
              <hr />
              <Dropdown.Item eventKey="2">Log Out</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};
