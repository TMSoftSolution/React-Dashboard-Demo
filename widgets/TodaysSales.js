import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "../components/vendor";

export default function TodaysSales({ ...props }) {
  const labels = ["Direct", "Organic"];

  const datasets = [
    {
      data: [70, 30],
      backgroundColor: ["#2C7BE5", "#A6C5F7"],
    },
  ];

  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col xs='6'>
            <h6 className="text-uppercase text-muted mb-2">Todays sales</h6>
            <h1 className="mb-0 mt-5">2,456</h1>
          </Col>
          <Col xs='6'>
            <Chart size='sm' style={{height:100}}>
              <Doughnut
                data={{ labels: labels, datasets: datasets}}
              />
            </Chart>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
