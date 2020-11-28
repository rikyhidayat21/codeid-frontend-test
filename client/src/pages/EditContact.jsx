import React, { useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Card,
  Alert,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editContact, getByIdContact } from "../store/actions/contactActions";
import { Link, useHistory, useParams } from "react-router-dom";
import Loader from "../components/Loader";

export default function EditContact() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const { contact_id } = useParams();

  const editState = useSelector((state) => state.contactEditReducer);
  const { contact, loading } = useSelector(
    (state) => state.contactGetByIdReducer
  );

  const onSubmit = (data) => {
    console.log("enter on submit form");
    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("age", data.age);
    formData.append("photo", data.photo);

    dispatch(editContact(contact_id, formData));
  };
  useEffect(() => {
    if (editState.success) {
      history.push("/");
    }
  }, [editState.success]);

  useEffect(() => {
    dispatch(getByIdContact(contact_id));
  }, []);

  return (
    <Container>
      {editState.errors && editState.errors.length ? (
        <Alert variant="danger" className="mt-2">
          {editState.errors[0]}
        </Alert>
      ) : (
        <></>
      )}
      {editState.loading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <h5 className="text-center">Edit Contact</h5>
            {loading ? (
              <Loader />
            ) : (
              <>
                {contact && contact.firstName && (
                  <>
                    <Row>
                      <Col sm="6">
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            ref={register({ required: "Name is required" })}
                            isInvalid={errors.firstName}
                            defaultValue={contact.firstName}
                          />
                          {errors.firstName && (
                            <Form.Text as="div" className="text text-danger">
                              {errors.firstName.message}
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
                            ref={register({ required: "Name is required" })}
                            isInvalid={errors.lastName}
                            defaultValue={contact.lastName}
                          />
                          {errors.description && (
                            <Form.Text as="div" className="text text-danger">
                              {errors.lastName.message}
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
                            defaultValue={contact.age}
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
                            defaultValue={contact.photo}
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
                          className="w-100"
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
                          className="w-100"
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            )}
            {/* {JSON.stringify(contact)} */}
          </Form>
        </>
      )}
    </Container>
  );
}
