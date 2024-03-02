import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {Link} from 'react-router-dom';
import "./Nav_Bar.scss";

export const NavBar = () => {
  let token;
  return (
    <>
      <Container id="NavBar" fluid className="text-center design_navbar">
        <Row className="d-flex justify-content-around align-items-center row_navbar">
          <Col>
            <h1 className="color-black"><Link to="/">Home</Link></h1>
          </Col>
          <Col>
            <DropdownButton
              title="menu"
              id="bg-nested-dropdown"
              className="design_dropDownButton"
            >
              {token ? (
                <>
                  <Link to="/Profile">Profil</Link>
                  <hr />
                  <Link to="/Projects">Proyectos</Link>
                  <hr />
                  <Dropdown.Item eventKey="3">LogOut</Dropdown.Item>
                </>
              ) : (
                <>
                  <Link to="/Profile">Profil</Link>
                  <hr />
                  <Link to="/Projects">Proyectos</Link>
                  <hr />
                  <Link to="/Contact">Contacto</Link>
                  <hr />
                  <Link to="/Login">Login</Link>
                </>
              )}
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};
