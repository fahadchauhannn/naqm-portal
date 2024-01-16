import React from "react"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap"
import styles from "./Home.module.css"

const AirPollutantCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className={styles.PollutantTitle}>
          Major Air Pollutants in NUST
        </CardTitle>
        <Row style={{ marginTop: "20px" }}>
          <Col className={styles.pollutantColumn}>
            <span className={styles.pollutantScore}>35</span>
            <span>(PM2.5)</span>
          </Col>
          <Col className={styles.pollutantColumn}>
            <span className={styles.pollutantScore}>34</span>
            <span>(CO)</span>
          </Col>
          <Col className={styles.pollutantColumn}>
            <span className={styles.pollutantScore}>32</span>
            <span>(PM10)</span>
          </Col>
        </Row>
        {/* <div className={styles.descContainer}>
          <div className={styles.subContainer1}>
            <div className={styles.ConcentrationScoreContainer}>
              <span className={styles.ConcentrationScore}>2.3</span>
              <span style={{ fontSize: "15px" }}>x</span>
            </div>
          </div>
          <div className={styles.subContainer2}>
            <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
              The current PM2.5 concentration in NUST is{" "}
              <span className={styles.warningText}>2.3 times above </span>
              the recommended limit given by the WHO 24 hrs air quality
              guidelines value.
            </p>
          </div>
        </div> */}
      </CardBody>
    </Card>
  )
}

export default AirPollutantCard
