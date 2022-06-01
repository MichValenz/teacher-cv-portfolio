import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";



function Lessons() {

const lessonList = [
  {
    name: "2-Point Perspective Lesson",
    image: require("../../images/2point.png"),
  },

  {
    name: "Ceramics and Clay Lesson",
    image: require("../../images/ceramics.png"),
  },
  {
    name: "Hispanic Heritage Lesson",
    image: require("../../images/hispanic.png"),
  },

  {
    name: "Civil Engineering Lesson",
    image: require("../../images/civil.png"),
  },

  {
    name: "One Point Lesson",
    image: require("../../images/onepoint.png"),
  },
  {
    name: "Shoe Design Lesson",
    image: require("../../images/shoeDesign.png"),
  },
  {
    name: "Still Life Lesson",
    image: require("../../images/stillLife.png"),
  },
];

 const render = (proj) => { 

  
  return (
    <Row className="row">
      <Col>
        <Card className="project" style={{ width: "20rem", height: "25rem" }}>
          <Card.Img className="work-1" variant="top" src={proj.image} />
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            
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
        <h1>Lessons</h1>
      </Card.Header>
      <CardGroup className="justify-content-center projContainer">
        {lessonList.map(render)}
      </CardGroup> 
  </>
);
}

export default Lessons;