import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "../../Common/Card/Card";

export const Profile = () => {
    return(
        <Container
      id="Main"
      fluid
      className="text-center d-flex justify-content-center design_home"
    >
            <Row>
                <Col>
                    <Card />
                </Col>
            </Row>
        </Container>
    )
}