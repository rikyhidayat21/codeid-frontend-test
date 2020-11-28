import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listContact } from "../store/actions/contactActions";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import ContactDetail from "../components/ContactDetail";
import Loader from "../components/Loader";

export default function Contact() {
  const { contacts, loading, errors } = useSelector(
    (state) => state.contactListReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listContact());
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-5">Contact List</h1>

      <Row>
        {loading ? (
          <Loader />
        ) : (
          <>
            {contacts &&
              contacts.map((contact) => {
                return <ContactDetail key={contact.id} contact={contact} />;
              })}
          </>
        )}
      </Row>
    </Container>
  );
}
