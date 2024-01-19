import React, { useEffect, useState } from "react"
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
import { get } from "helpers/api_helper"

const AirPollutantCard = () => {
  const [pollutants, setPollutants] = useState([])

  useEffect(() => {
    fetchPollutants()
  }, [])

  const fetchPollutants = async () => {
    try {
      const reponse = await get("data/top-pollutants")
      console.log(reponse.data, "Top Pollutants")
      setPollutants(reponse.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Card>
      <CardBody>
        <CardTitle className={styles.PollutantTitle}>
          Major Air Pollutants in NUST
        </CardTitle>
        <Row style={{ marginTop: "20px" }}>
          {pollutants.map(pollutant => (
            <Col className={styles.pollutantColumn} key={pollutant.name}>
              <span className={styles.pollutantScore}>{pollutant.aqi}</span>
              <span>({pollutant.name})</span>
            </Col>
          ))}
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
