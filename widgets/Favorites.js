import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useMemo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useGlobalFilter, usePagination, useTable } from "react-table";

export default function Favorites({ homes }) {
  const data = useMemo(() => homes, []);

  const columns = useMemo(
    () => [
      {
        accessor: "imgSrc",
      },
      {
        accessor: "progress",
      },
      {
        accessor: "title",
      },
    ],
    []
  );

  const { page, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <Container fluid>
      <Row>
        {page.map((row, i) => {
          prepareRow(row);

          const [imgSrc, progress, title] = row.cells.map((cell) => cell.value);

          return (
            <Col xs={12} md={6} xl={4} {...row.getRowProps({ role: null })}>
              <Card>
                <Card.Img variant="top" src={imgSrc} alt={title} />
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <h4 className="mb-2 name">
                        <Link href="/">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <Card.Text className="small text-muted">
                        A beautiful townhouse in the heart of Miami's downtown
                        district. With 3 bedrooms and a heated pool.
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="card-footer-boxed">
                  <Row className="align-items-center">
                    <Col>
                      <FeatherIcon icon="map-pin" size="0.7em" />
                      <span className="small text-muted ms-1">Bostone</span>
                      <FeatherIcon className="ms-4" icon="home" size="0.7em" />
                      <span className="small text-muted ms-1">5 bedroom</span>
                      <FeatherIcon className="ms-4" icon="map" size="0.7em" />
                      <span className="small text-muted ms-1">Villa</span>
                    </Col>
                  </Row>

                  <Row className="align-items-center mt-3">
                    <div className="border border-1 rounded text-center py-2 fs-3">
                      View listing details
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      )
    </Container>
  );
}
