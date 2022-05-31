import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Figure from "react-bootstrap/Figure";
// import headshot from "../../images/headshot.png"


function About() {
  return (
    <>
      <Container >
        <Row id="aboutMe">
          <Col>
            <h1 id="about">About Me</h1>
            <p>
                  insert text here
            </p>

            <p>
                  insert text here
            </p>

            <p>
                  insert text here
            </p>
          </Col>
          {/* <Figure>
            <Figure.Image
              width={171}
              height={180}
              src={headshot}
              className="img-fluid rounded-circle"
              alt="headshot of Cristina Valenzuela"
            />
          </Figure> */}
        </Row>
      </Container>
    </>
  );
}

export default About;
