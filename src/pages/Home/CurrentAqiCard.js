import React, { useEffect, useState } from "react"
import styles from "./Home.module.css"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import image from "../../assets/images/custom/cough.jpg"
import { get } from "helpers/api_helper"

const CurrentAqiCard = () => {
  const [aqi, setAqi] = useState()
  const [styleBg, setStyleBg] = useState(styles.success)
  const [styleTxt, setStyleTxt] = useState(styles.successText)

  useEffect(() => {
    fetchAqi()
  }, [])

  const fetchAqi = async () => {
    try {
      const reponse = await get("data/average-aqi")
      console.log("aqi", reponse.data)
      setAqi(reponse.data)
      console.log(reponse.data.avgAqi)

      if (reponse.data?.avgAqi > 50 && reponse.data?.avgAqi <= 100) {
        setStyleBg(styles.moderate)
        setStyleTxt(styles.moderateText)
      }
      if (reponse.data?.avgAqi > 100 && reponse.data?.avgAqi <= 150) {
        setStyleBg(styles.unhealthy)
        setStyleTxt(styles.unhealthyText)
      }
      if (reponse.data?.avgAqi > 150 && reponse.data?.avgAqi <= 200) {
        setStyleBg(styles.danger)
        setStyleTxt(styles.dangerText)
      }
      if (reponse.data?.avgAqi > 200 && reponse.data?.avgAqi <= 300) {
        setStyleBg(styles.veryUnhealthy)
        setStyleTxt(styles.veryUnhealthyText)
      }
      if (reponse.data?.avgAqi > 300) {
        setStyleBg(styles.hazardous)
        setStyleTxt(styles.hazardousText)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Card>
      <CardBody>
        <CardTitle className={styles.headerTitle}>
          NUST Air Quality Index (AQI){" "}
          <span className={styles.dangerText}>LIVE</span>
        </CardTitle>
        <p className={styles.bigText}>
          Real-time average air pollution level NUST
        </p>
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <Row>
              <p className={styles.bigText}>Last Update: 16 Dec 2023</p>
            </Row>
            <Row>
              <div className={`${styles.statusCard} ${styleBg}`}>
                {aqi?.status}
              </div>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className={`${styles.score} ${styleTxt}`}>{aqi?.avgAqi}</p>
                <p className={styles.subtitle}>(AQI-NUST)</p>
              </Col>
              <Col>
                <img className={styles.img} src={image} alt="graphic" />
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CurrentAqiCard
