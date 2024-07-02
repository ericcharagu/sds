import React from "react";
import { Col, Row, Card, Image } from "react-bootstrap";
function Energy() {
  return (
    <div className="container-fluid" id="energyDiv">
      <h1>Energy</h1>
      <div className="container">
        <p style={{ color: "white" }}>
          Our Energy Analyst for Construction services provide comprehensive
          energy performance evaluations and optimization strategies for
          construction projects. Our expert analysts work closely with
          architects, engineers, and construction teams to ensure that buildings
          are designed and constructed to maximize energy efficiency and
          sustainability.
        </p>
        <Card style={{ backgroundColor: "inherit" }}>
          <Row>
            <Col>
              {" "}
              <Image src="/img/energy/calc.jpg" />
            </Col>
            <Col>
              <p style={{ color: "white" }}>Text on home energy analysis</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Image src="../img/energy/ai.jpg" />
            </Col>
            <Col>
              <p style={{ color: "white" }}>Text on home energy analysis</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Image src="../img/energy/house.jpg" />
            </Col>
            <Col>
              <p style={{ color: "white" }}>Text on home energy analysis</p>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Energy;
