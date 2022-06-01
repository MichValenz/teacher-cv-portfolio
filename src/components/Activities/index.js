import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";


function Activities() {
  const activitiesList = [
    {
      name: "Nimitz Middle School Art Show 2018",
      image: require("../../images/nimitzArtShow18.png"),
    },
    {
      name: "Nimitz Middle School Art Show 2019",
      image: require("../../images/nimitzArtShow19.png"),
    },
    {
      name: "Nimitz Middle School Jr. VASE 2018",
      image: require("../../images/jrvase18.png"),
    },
    {
      name: "Nimitz Middle School Jr. VASE 2019",
      image: require("../../images/jrvase19.png"),
    },

    {
      name: "Brentwood Art Show",
      image: require("../../images/brentwoodshow.png"),
    },

    {
      name: "Brentwood Middle School Jr. VASE 2021",
      image: require("../../images/jrvase21.png"),
    },
    {
      name: "Brentwood Middle School Jr. VASE 2022",
      image: require("../../images/jrvase22.png"),
    },

    {
      name: "Latina Leads",
      image: require("../../images/latinaLeads.png"),
    },
    {
      name: "Spotlight Program",
      image: require("../../images/spotlight.png"),
    },

    {
      name: "McNay Musuem Spotlight Art Show",
      image: require("../../images/mcnayShow.png"),
    },
    {
      name: "McNay Musuem Art Field Trip",
      image: require("../../images/mcnaytrip.png"),
    },
  ];

  const render = (act) => {
    return (
      <Row className="row">
        <Col>
          <Card className="project" style={{ width: "20rem", height: "20rem" }}>
            <Card.Img className="work-1" variant="top" src={act.image} />
            <Card.Body>
              <Card.Title>{act.name}</Card.Title>
              <Card.Text>{act.description}</Card.Text>
              <Button href={act.image} target="blank">
                Open Image
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Card.Header>
        {" "}
        <h1>Activities</h1>
      </Card.Header>
      <CardGroup className="justify-content-center projContainer">
        {activitiesList.map(render)}
      </CardGroup>
    </>
  );
}

export default Activities;
