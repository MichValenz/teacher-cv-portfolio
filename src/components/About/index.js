import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Figure from "react-bootstrap/Figure";
import headshot from "../../images/headshot.png"


function About() {
  return (
    <>
      <Container>
        <Row id="aboutMe">
          <Col>
            <h1 id="about">About Me</h1>
            <p>
              As a visual arts teacher my philosophy is to empower students with
              creative tools. 
              My students learn how to apply these creative skills to other academic subjects such as math, science, history and writing. Students will apply these creative concepts to explore careers in graphic design, civil engineering, architecture, animation and much more. 
            I have taught visual literacy in middle school for 5 years
              in 6th, 7th and 8th grade. My classroom lessons include developing motor skills in 
              ceramics, drawing, painting, sculpture and many more mediums. The core of
              each visual art lesson is based on fundamental skills, historical
              reference, culture and creative expression.

      
            </p> <br></br>

            <p>

            As a first generation Mexican-American artist from West Texas, I draw inspiration from my culture, community and experiences. I understnd how to engage students to draw from their own experiences and community to grow as a young creative adult. 


            </p>
          </Col>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              src={headshot}
              className="img-fluid rounded-circle"
              alt="headshot of Cristina Valenzuela"
            />
          </Figure>
        </Row>
      </Container>
    </>
  );
}

export default About;
