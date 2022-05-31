import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";




function Projects() {
const projectList = [
  {
    name: "Example",
    image: require("../../images/background.jpg"),
    description:
      "Students learned about painting by painting a painting.",
    link: "https://mighty-reef-11767.herokuapp.com/",
  }
];

 const render = (proj) => { 

  
  return (
    <Row className="row">
      <Col>
        <Card className="project" style={{ width: "20rem", height: "28rem" }}>
          <Card.Img className="work-1" variant="top" src={proj.image} />
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            <Card.Text>{proj.description}</Card.Text>
            <Button href={proj.link}>Go to Website</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );}

  return (
    <>
      <Card.Header >
        {" "}
        <h1>Projects</h1>
      </Card.Header>
      <CardGroup className="justify-content-center projContainer">
        {projectList.map(render)}
      </CardGroup>
    </>
  );
}

export default Projects;