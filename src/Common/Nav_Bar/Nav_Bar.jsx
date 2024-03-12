import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Nav_Bar.scss";
import { useState } from "react";

export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const navBar = document.getElementById("NavBar");

  const active_menu = () => {
    menu ? setMenu(false) : setMenu(true)
  };

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
            <Row className="nav_bar_pc">
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
            <Row className="nav_bar_phone">
              <Col>
                <i className="fa-solid fa-bars" onClick={active_menu}></i>
              </Col>
            </Row>
          </Col>
        </Row>
        {menu && (
          <Row className="menu_event">
            <Col>
              <Row className="first_row">
                <a>
                  <p>uno</p>
                </a>
              </Row>
              <Row>
                <a>
                  <p>dos</p>
                </a>
              </Row>
              <Row>
                <a>
                  <p>tres</p>
                </a>
              </Row>
              <Row>
                <a>
                  <p>cuatro</p>
                </a>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
