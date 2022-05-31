import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";



function Projects() {

const projectList = [
  {
    name: "2-Point Perspective",
    image: require("../../images/2point.png"),
    description:
      "Foundations: observations and perception. The student develops and expands visual literacy skills using critical thinking. Students are expected to compare and contrast the elements of art, including line, shape, color, texture, form, space, and value, as the fundamentals of art in personal artworks.",
  },

  {
    name: "Ceramics and Clay",
    image: require("../../images/ceramics.png"),
    description:
      "Foundations: observations and perception. The student develops and expands visual literacy skills using critical thinking. Students are expected to compare and contrast the elements of art, including line, shape, color, texture, form, space, and value, as the fundamentals of art in personal artworks.",
  },
  {
    name: "Hispanic Heritage",
    image: require("../../images/hispanic.png"),
    description:
      "Foundations: observations and perception. The student develops and expands visual literacy skills using critical thinking. Students are expected to compare and contrast the elements of art, including line, shape, color, texture, form, space, and value, as the fundamentals of art in personal artworks.",
  },

  {
    name: "Civil Engineering",
    image: require("../../images/civil.png"),
    description:
      "Foundations: observations and perception. The student develops and expands visual literacy skills using critical thinking. Students are expected to compare and contrast the elements of art, including line, shape, color, texture, form, space, and value, as the fundamentals of art in personal artworks.",
  },

  {
    name: "Civil Engineering",
    image: require("../../images/civil.png"),
    description:
      "Foundations: observations and perception. The student develops and expands visual literacy skills using critical thinking. Students are expected to compare and contrast the elements of art, including line, shape, color, texture, form, space, and value, as the fundamentals of art in personal artworks.",
  },

  {
    name: "McNay Art Musuem Spotlight Program",
    image: require("../../images/spotlight.png"),
    description:
      "Foundations: observations and perception. The student develops and expands visual literacy skills using critical thinking. Students are expected to compare and contrast the elements of art, including line, shape, color, texture, form, space, and value, as the fundamentals of art in personal artworks.",
  },
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
            <Button href={proj.image} target="blank">Open Image</Button>
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