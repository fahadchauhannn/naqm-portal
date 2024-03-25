import React, { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Table } from "reactstrap"
import styles from "./Home.module.css"
import { get } from "helpers/api_helper"
const ForeCast = () => {
  const [data, setData] = useState([])
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetchTableData()
    calculateNextSixDays();
  }, [])

  const fetchTableData = async () => {
    try {
      const response = await get("data/latest-readings")
      setData(response.data?.prediction?.prediction[0]);
      console.log("this is the aqi data", data);
    } catch (err) {
      console.log(err)
    }
  }

  const calculateNextSixDays = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const nextSixDays = [];

    for (let i = 0; i < 7; i++) {
      const nextDayIndex = (currentDayIndex + i) % 7;
      nextSixDays.push(weekdays[nextDayIndex]);
    }

    // Remove the first day as it's the current day
    nextSixDays.shift();

    setDays(nextSixDays);
  };


  return (
    <Card className={styles.cardContainer}>
      <CardHeader
        className={styles.headerTable}
        style={{ textAlign: "center" }}
      >
        NUST Air Quality Forecast
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table mb-0">
            <thead>
              <tr>
                <th className={styles.column1}>DAY</th>
                {days.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}

              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styles.column1} scope="row">
                  AQI
                </th>
                {data && data.map((value, index) => (
                  <td key={index} className={styles.warningText}>
                    {Math.floor(value)}
                  </td>
                ))}

              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default ForeCast
