import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="bg-dark text-light text-center">
      <Row>
        <Col>
          <h1>What to do?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This is a simple app that helps you keep track of what you need to
            do.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
