import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pdf from "../../images/Resume.pdf";

function Resume() {
    return (
      <>
        <Card className="resumeCard">
          <Card.Header>
            {" "}
            <h1>Resume Highlights</h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>Teacher Skills and Experiences</Card.Title>
            <Card.Text>
              <ul>
                <li>Bilingual (English and Spanish) </li>
                <li>Cultural and historical representation </li>
                <li>Visual arts studio management </li>
                <li>Teacher-Student Time Management </li>
                <li>Classroom behavior management </li>
                <li>Art Museum/ Student Exhibit Management </li>
                <li>Jr. Visual Arts Scholastic Event </li>
                <li>Latina LEADS Facilitator </li>
              
              </ul>
            </Card.Text>

            <Button href={pdf} target="blank" variant="primary">
              Download Resume PDF
            </Button>
          </Card.Body>
        </Card>
      </>
    );

    
}
export default Resume;