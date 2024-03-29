import React, { useEffect, useState } from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import therm from "../../assets/images/therm.png"
import humid from "../../assets/images/humid.png"
import wind from "../../assets/images/wind.png"
import rain from "../../assets/images/rain.png"
import cloud from "../../assets/images/cloud.png"
import air from "../../assets/images/air.png"
// import ApexRadial from "./ApexRadial"

const MainReadings = props => {
    const { node } = props
    const [ambientTemperature, setAmbientTemperature] = useState(null);
    const [ipValue, setipValue] = useState(null)

    useEffect(() => {
        const fetchTemperature = async () => {
            try {
                const response1 = await fetch(`http://ip-api.com/json`);
                const data1 = await response1.json();
                setipValue(data1);
                // Check if latitude and longitude values are available
                if (data1?.lat && data1?.lon) {
                    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data1.lat}&longitude=${data1.lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,rain,cloud_cover`);
                    const data2 = await response2.json();
                    setAmbientTemperature(data2?.current);
                }
            } catch (error) {
                console.error("Error fetching temperature data:", error);
            }
        };

        fetchTemperature();
    }, []); // Empty dependency array to run the effect only once
    return (
        <React.Fragment>
            {" "}
            <Card>
                <CardBody>
                    <CardTitle>Location</CardTitle>
                    <Row>
                        <Col sm="12">
                            {/* <p className="text-muted">At Node</p> */}

                            <h3>{ipValue?.city}</h3>

                        </Col>
                        {/* <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial dataColors='["--bs-warning"]' />
              </div>
            </Col> */}
                        {/* <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={"50px"} src={air} alt="air" />
            </Col> */}
                    </Row>
                    <CardTitle className="mt-4">Temperture</CardTitle>
                    <Row>
                        <Col sm="6">


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

                            <h3>{ambientTemperature?.relative_humidity_2m} %</h3>
                        </Col>
                        <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img width={"50px"} src={humid} alt="water drops" />
                        </Col>
                    </Row>
                    <CardTitle className="mt-4">Rain </CardTitle>
                    <Row>
                        <Col sm="6">

                            <h3>{ambientTemperature?.rain} mm</h3>
                        </Col>
                        <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img width={"50px"} src={rain} alt="Rain" />
                        </Col>
                    </Row>
                    <CardTitle className="mt-4">Cloud Cover </CardTitle>
                    <Row>
                        <Col sm="6">

                            <h3>{ambientTemperature?.cloud_cover} %</h3>
                        </Col>
                        <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img width={"50px"} src={cloud} alt="cloud" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default MainReadings
