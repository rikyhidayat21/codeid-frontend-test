import React, { useEffect } from "react";
import { Form, Button, Container, Col, Row, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createContact } from "../store/actions/contactActions";
import Loader from "../components/Loader";

export default function AddContact() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const addState = useSelector((state) => state.contactCreateReducer);
  console.log(addState, "<=== use selector add state contact create reducer");

  const onSubmit = (data) => {
    console.log("enter on submit form");
    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("age", data.age);
    formData.append("photo", data.photo);

    dispatch(createContact(formData));
  };

  useEffect(() => {
    if (addState.success) {
      history.push("/");
    }
  }, [addState.success]);

  return (
    <Container>
      {addState.errors && addState.errors.length ? (
        <Alert variant="danger" className="mt-2">
          {addState.errors[0]}
        </Alert>
      ) : (
        <> </>
      )}
      {addState.loading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <h5 className="text-center">Add New Contact</h5>
            <Row>
              <Col sm="6">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    ref={register({ required: "First name is required" })}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Text as="div" className="text text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col sm="6">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    ref={register({ required: "Last name is required" })}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Text as="div" className="text text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col sm="6">
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    name="age"
                    ref={register({ required: "Age is required" })}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Text as="div" className="text text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col sm="6">
                <Form.Group>
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter photo url"
                    name="photo"
                    ref={register({ required: "Photo is required" })}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Text as="div" className="text text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <Button
                  variant="danger"
                  className="w-100 rounded"
                  as={Link}
                  to={"/"}
                >
                  Cancel
                </Button>
              </Col>
              <Col cm="6">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </Container>
  );
}
