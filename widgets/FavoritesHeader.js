import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Header } from "../components";
import FeatherIcon from "feather-icons-react";

export default function FavoritesHeader({ ...props }) {
  return (
    <Header {...props}>
      <Container fluid>
        <Header.Body>
          <Row className="align-items-end">
            <Col>
              <Header.Title as="h2">Your favorites</Header.Title>
            </Col>
            <Col xs="auto">
              <form>
                <InputGroup className="input-group-merge input-group-rounded" size="sm">
                  <Form.Control type="search" placeholder="Search" />
                  <InputGroup.Text>
                    <FeatherIcon icon="search" size="1em" />
                  </InputGroup.Text>
                </InputGroup>
              </form>
            </Col>
          </Row>
        </Header.Body>
      </Container>
    </Header>
  );
}
