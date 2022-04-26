import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Card,
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Avatar, Icon } from "../components";
import { nav as data } from "../data";

export default function Sidenav({ ...props }) {
  const router = useRouter();

  const [activeItemId, setActiveItemId] = useState(() => {
    return Object.keys(data).filter((itemId) => {
      return data[itemId].url === router.pathname;
    })[0];
  });
  function isExpanded(itemId) {
    if (activeItemId === itemId) {
      return true;
    }

    return isParent(itemId);
  }

  function isParent(itemId) {
    const item = data[itemId];

    if (!item.children) {
      return false;
    }

    if (item.children.includes(activeItemId)) {
      return true;
    }

    let result = false;

    item.children.forEach((childId) => {
      if (isParent(childId)) {
        result = true;
      }
    });

    return result;
  }

  function getItems(ids) {
    return ids.map(function (id, index) {
      const item = data[id];

      return (
        <div key={id}>
          {index > 0 && <hr className="navbar-divider" />}
          {item.title && <h6 className="navbar-heading">{item.title}</h6>}
          {item.children && <Nav>{getSubitems(item.children, id, ids)}</Nav>}
        </div>
      );
    });
  }

  function getSubitems(ids, parentId, arr) {
    return ids.map(function (id) {
      const item = data[arr.splice(arr.indexOf(id), 1)];

      return (
        <Nav.Item key={id}>
          {item.children ? (
            <>
              <Nav.Link onClick={() => handleClick(id, parentId)} role="button">
                {item.icon && <FeatherIcon icon={item.icon} size="17" />}
                {item.title}
                <FeatherIcon
                  icon="chevron-down"
                  size="1em"
                  className={`ms-auto nav-chevron ${
                    isExpanded(id) && "active"
                  }`}
                  {...props}
                />
              </Nav.Link>
              <Collapse in={isExpanded(id)}>
                <div>
                  <div className="nav nav-sm flex-column">
                    {getSubitems(item.children, id, arr)}
                  </div>
                </div>
              </Collapse>
            </>
          ) : (
            <Link href={item.url} passHref>
              <Nav.Link
                active={router.pathname === item.url}
                onClick={() => handleClick(id, parentId)}
              >
                {item.icon && <FeatherIcon icon={item.icon} size="17" />}
                {item.title}
              </Nav.Link>
            </Link>
          )}
        </Nav.Item>
      );
    });
  }

  function handleClick(itemId, parentId, setVisible) {
    setActiveItemId(isExpanded(itemId) ? parentId : itemId);

    if (setVisible) {
      setVisible(false);
    }
  }

  const toggler = <Navbar.Toggle />;

  const brand = (
    <Link href="/" passHref>
      <Navbar.Brand>
        <img className="navbar-brand-img" src="/img/logo.svg" alt="..." />
      </Navbar.Brand>
    </Link>
  );


  const footer = (
    <div>
      <Row className="align-items-center">
        <Col xs="auto">
          <FeatherIcon icon="settings" size="1em" />
        </Col>
        <Col className="ms-3">
          <h4 className="mb-1">Settings</h4>
        </Col>
      </Row>
      <Row className="align-items-center mt-3">
        <Col xs="auto">
          <FeatherIcon icon="help-circle" size="1em" />
        </Col>
        <Col className="ms-3">
          <h4 className="mb-1">Help Center</h4>
        </Col>
      </Row>
      <Row className="align-items-center mt-5">
        <Col xs="auto">
          <Avatar size="xs">
            <Avatar.Image
              src="/img/avatars/profiles/avatar-1.jpg"
              className="rounded-circle"
              alt="..."
            />
          </Avatar>
        </Col>
        <Col className="">
          <h4 className="mb-1">Louise Thompson</h4>
          <Card.Text className="small text-muted">Enterprise</Card.Text>
        </Col>
      </Row>
    </div>
  );

  const collapse = (
    <Navbar.Collapse {...props}>
      {getItems(Object.keys(data))}
      <div className="mt-auto mb-md-4" />
      {footer}
    </Navbar.Collapse>
  );

  return (
    <>
      <Navbar
        expand="md"
        className="navbar-vertical fixed-start"
        collapseOnSelect={true}
        {...props}
      >
        <Container fluid>
          {toggler}
          {brand}
          {collapse}
        </Container>
      </Navbar>
    </>
  );
}
