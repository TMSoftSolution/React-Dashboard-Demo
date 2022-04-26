import { Col, Container, Row } from "react-bootstrap";
import {
  AnalyticsHeader,
  Favorites,
  FavoritesHeader,
  Inventory,
  NewProducts,
  TodaysSales,
} from "../widgets";
import { homes } from "../data";

export default function Index() {
  return (
    <div className="main-content">
      <AnalyticsHeader />
      <Container fluid>
        <Row>
          <Col sm={12} md={4}>
            <TodaysSales />
          </Col>
          <Col sm={12} md={4}>
            <NewProducts />
          </Col>
          <Col sm={12} md={4}>
            <Inventory />
          </Col>
        </Row>
      </Container>
      <FavoritesHeader />
      <Container fluid>
        <Favorites homes={homes} />
      </Container>
    </div>
  );
}
