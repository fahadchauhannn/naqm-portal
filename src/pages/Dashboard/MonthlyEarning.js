import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import therm from "../../assets/images/therm.png"
import humid from "../../assets/images/humid.png"
import air from "../../assets/images/air.png"
import ApexRadial from "./ApexRadial"

const CurrentAqi = props => {
  const { node } = props
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle>Current AQI</CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">At Node</p>
              <h3>{node?.aqi}</h3>
            </Col>
            {/* <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial dataColors='["--bs-warning"]' />
              </div>
            </Col> */}
            <Col sm="6">
              <img width={"50px"} src={air} alt="thermameter" />
            </Col>
          </Row>
          <CardTitle className="mt-4">Temperture</CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">At Node</p>
              <h3>{node?.temp}°C</h3>
            </Col>
            <Col sm="6">
              <img width={"50px"} src={therm} alt="thermameter" />
            </Col>
          </Row>
          <CardTitle className="mt-4">Humidity </CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">At Node</p>
              <h3>{node?.humid} %</h3>
            </Col>
            <Col sm="6">
              <img width={"50px"} src={humid} alt="water drops" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default CurrentAqi
