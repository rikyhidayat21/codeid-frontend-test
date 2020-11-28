import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Card,
  Image,
  Modal,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/actions/contactActions";
import { Link } from "react-router-dom";

export default function ContactDetail({ contact }) {
  const dispatch = useDispatch();

  function handleDelete() {
    console.log("enter delete handler");
    dispatch(deleteContact(contact.id));
  }

  function handleEdit() {
    console.log("enter edit handler");
    console.log(contact.id, "<=== contact.id");
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col xs="12" sm="6" key={contact.id}>
      <Card className="p-2 shadow-sm my-2">
        <Row>
          <Col sm="4">
            <Image
              height="120"
              width="100%"
              style={{ objectFit: "cover" }}
              src={contact.photo}
            />
          </Col>

          <Col className="d-flex flex-column justify-content-around" sm="7">
            <p
              style={{ fontWeight: "bold", fontSize: "18px" }}
              className="mb-0"
            >
              {contact.firstName} {contact.lastName}
            </p>
            <p style={{ marginBottom: "0px" }}>Age {contact.age} years old</p>
          </Col>

          <Col sm="1">
            <div
              className="d-flex flex-column align-items-end justify-content-between"
              style={{ height: "120px" }}
            >
              <Button onClick={handleShow} size="sm" variant="light">
                <i className="fas fa-times text text-danger fa-lg"></i>
              </Button>
              <Button size="sm" variant="light">
                <i className="fas fa-plus-circle text text-primary fa-lg"></i>
              </Button>
              <Button
                as={Link}
                to={`/edit-contact/${contact.id}`}
                onClick={handleEdit}
                variant="light"
                size="sm"
              >
                <i className="fas fa-pen-fancy fa-lg"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure Want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}
