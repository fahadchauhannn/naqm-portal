import React, { useEffect, useState } from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import therm from "../../assets/images/therm.png"
import humid from "../../assets/images/humid.png"
import wind from "../../assets/images/wind.png"
import air from "../../assets/images/air.png"
import ApexRadial from "./ApexRadial"

const CurrentAqi = props => {
  const { node } = props
  const [ambientTemperature, setAmbientTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        if (node?.lat && node?.lng) {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${node?.lat}&longitude=${node?.lng}&current=temperature_2m,wind_speed_10m`
          );
          const data = await response.json();
          setAmbientTemperature(data?.current);
        }

      } catch (error) {
        console.error("Error fetching temperature data:", error);
      }
    };

    fetchTemperature();
  }, [node]);
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
            <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={"50px"} src={air} alt="air" />
            </Col>
          </Row>
          <CardTitle className="mt-4">Temperture</CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">At Node</p>
              <h3>{node?.temp}°C</h3>
              <p className="text-muted">Ambient </p>
              <h3>{ambientTemperature?.temperature_2m !== null && ambientTemperature?.temperature_2m !== undefined ? `${ambientTemperature?.temperature_2m}°C` : "Loading..."}</h3>
            </Col>
            <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={"50px"} src={therm} alt="thermameter" />
            </Col>
          </Row>
          <CardTitle className="mt-4">Wind Speed</CardTitle>
          <Row>
            <Col sm="6">
              <h3>{ambientTemperature?.wind_speed_10m !== null && ambientTemperature?.temperature_2m !== undefined ? `${ambientTemperature?.wind_speed_10m} km/h` : "Loading..."}</h3>
            </Col>
            <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={"50px"} src={wind} alt="wind" />
            </Col>
          </Row>
          <CardTitle className="mt-4">Humidity </CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">At Node</p>
              <h3>{node?.humid} %</h3>
            </Col>
            <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={"50px"} src={humid} alt="water drops" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default CurrentAqi
