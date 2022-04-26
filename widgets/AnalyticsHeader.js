import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Header } from "../components";
import FeatherIcon from "feather-icons-react";

export default function AnalyticsHeader({ ...props }) {
  return (
    <Header {...props}>
      <Container fluid>
        <Header.Body>
          <Row className="row align-items-end">
            <Col>
              <Header.Title as="h1">Your Dashboard</Header.Title>
            </Col>
            <Col xs="auto">
              <FeatherIcon
                className="border border-1 rounded-circle p-2"
                icon="bell"
                size="2em"
              />
              <FeatherIcon
                className="ms-3 border border-1 rounded-circle p-2"
                icon="search"
                size="2em"
              />
            </Col>
          </Row>
        </Header.Body>
      </Container>
    </Header>
  );
}
