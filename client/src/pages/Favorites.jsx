import React, { useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Alert,
  Card,
  Image,
} from "react-bootstrap";

export default function Favorites() {
  return (
    <Container>
      <h5 className="text-center mt-5">Your Favorite Contacts</h5>
      <Row>
        <Col xs="12" xm="6">
          <Card style={{ width: "18rem" }} className="p-2 shadow-sm my-2">
            <Card.Img
              variant="top"
              src="https://pbs.twimg.com/media/EXGdVjvU8AArdwK.jpg"
            />
            <Card.Body className="text-center">
              <Card.Title>Mamang Racing</Card.Title>
              <Card.Text>Age 37 Years Old</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
