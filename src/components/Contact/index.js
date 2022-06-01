
import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function Contact() {
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Header>
          {" "}
          <h1>Contact Information </h1>{" "}
        </Card.Header>
        <ListGroup className="contact-page" variant="flush">
          <ListGroup.Item>
            {" "}
            <h3>Phone:</h3> <a href="tel:432-556-0801">432-556-0801</a>
          </ListGroup.Item>
          <ListGroup.Item><h3>Email:</h3> <a href="mailto:cristinaovalenz@gmail.com"> cristinaovalenz@gmail.com</a></ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}



export default Contact;
