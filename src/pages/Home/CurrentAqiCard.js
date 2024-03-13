import React, { useEffect, useState } from "react"
import styles from "./Home.module.css"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import image from "../../assets/images/o.jpg"
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
          Revolutionizing Fruit Management: CitrusPak's Innovative Solutions Lead the Way
          {/* <span className={styles.dangerText}>LIVE</span> */}
        </CardTitle>
        <p className={styles.bigText}>
          Empowering Farmers with Cutting-Edge Technology in Agriculture
        </p>
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <Row>
              <p className={styles.bigText}>CitrusPark stands as a pioneering force in reshaping conventional fruit management practices through its trailblazing solutions. By harnessing the power of state-of-the-art technologies like Artificial Intelligence (AI) and the Internet of Things (IoT), we are spearheading a transformation in how farmers approach the cultivation of their fruit crops.</p>
            </Row>
            {/* <Row>
              <div className={`${styles.statusCard} ${styleBg}`}>
                {aqi?.status}
              </div>
            </Row> */}
          </Col>
          <Col>
            <Row>
              {/* <Col>
                <p className={`${styles.score} ${styleTxt}`}>{aqi?.avgAqi}</p>
                <p className={styles.subtitle}>(AQI-NUST)</p>
              </Col> */}
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
