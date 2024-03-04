import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.scss"

export const Projects = () => {

  const project = (nr) => {
    alert(`poyecto ${nr}`)
  }

  return (
    <Container id="Main" fluid className="text-center d-flex design_home">
      <Row>
        <Col>
          <h1>Proyectos</h1>
        </Col>
      </Row>
      <hr />
      <Row className="container_img">
        <div className="image-container" onClick={()=>project(1)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 1</p>
        </div>
        <div className="image-container" onClick={()=>project(2)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 2</p>
        </div>
        <div className="image-container" onClick={()=>project(3)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 3</p>
        </div>
        <div className="image-container" onClick={()=>project(4)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 4</p>
        </div>
        <div className="image-container" onClick={()=>project(5)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 5</p>
        </div>
        <div className="image-container" onClick={()=>project(6)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 6</p>
        </div>
        <div className="image-container" onClick={()=>project(7)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 7</p>
        </div>
        <div className="image-container" onClick={()=>project(8)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 8</p>
        </div>
        <div className="image-container" onClick={()=>project(9)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 9</p>
        </div>
        <div className="image-container" onClick={()=>project(10)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 10</p>
        </div>
        <div className="image-container" onClick={()=>project(11)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 11</p>
        </div>
        <div className="image-container" onClick={()=>project(12)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 12</p>
        </div>
        <div className="image-container" onClick={()=>project(13)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 13</p>
        </div>
        <div className="image-container" onClick={()=>project(14)}>
          <img src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" alt="project" />
          <p>Titulo del Proyecto 14</p>
        </div>
    </Row>
    <hr />
    </Container>
  );
};
