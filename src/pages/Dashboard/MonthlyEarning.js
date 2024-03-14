import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import therm from "../../assets/images/ripe.webp"
import humid from "../../assets/images/unripe.png"
import air from "../../assets/images/total.png"
import ApexRadial from "./ApexRadial"

const CurrentAqi = props => {
  const { node } = props
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle>Total Count</CardTitle>
          <Row>
            <Col sm="6">
              {/* <p className="text-muted">At Node</p> */}
              <h3>13944</h3>
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
          <CardTitle className="mt-4">Ripe Count</CardTitle>
          <Row>
            <Col sm="6">
              {/* <p className="text-muted">At Node</p> */}
              <h3>8821</h3>
            </Col>
            <Col sm="6">
              <img width={"50px"} src={therm} alt="thermameter" />
            </Col>
          </Row>
          <CardTitle className="mt-4">Unripe Count </CardTitle>
          <Row>
            <Col sm="6">
              {/* <p className="text-muted">At Node</p> */}
              <h3>5123</h3>
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
