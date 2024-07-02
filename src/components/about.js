import React from "react";
import "./about.css";
import { Card, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="container-fluid" id="conDiv">
      <Card
        className="aboutCard"
        style={{ margin: "auto", height: "100%", border: "None" }}
      >
        <Card.Body>
          <h1>Shaping sustainable visions</h1>
          <p className="aboutP">
            Strata Design Studio is more than just a design workshop. We're a
            passionate team committed to redefining the future of design through
            sustainability.
            <br /> At Strata, sustainability isn't just a buzzword; it's our
            guiding principle. We believe that architecture has the power to
            transform our world for the better, and that's why we're dedicated
            to creating spaces that are not only visually stunning but also
            environmentally responsible. <br />
            From residential homes nestled seamlessly into their natural
            surroundings to urban developments that prioritize functionality
            without compromising sustainability, our projects reflect our deep
            commitment to eco-conscious design.
            <br /> But our mission goes beyond just designing buildings. We're
            cultivating a culture of sustainability within our team, fostering
            creativity, innovation, and collaboration on every project.
            Together, we're pushing the boundaries of what's possible in
            sustainable design, one visionary project at a time.
            <br /> Our diverse portfolio showcases our dedication to sustainable
            principles across a range of projects, from residential and
            commercial spaces to public structures and urban planning
            initiatives. Each project is an opportunity to make a positive
            impact, and we approach it with passion, creativity, and a
            relentless commitment to sustainability.
            <br /> Join us on our journey towards a greener, more sustainable
            future. Together, we can show the world that architecture has the
            power to shape a better tomorrow.
            <br />
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
