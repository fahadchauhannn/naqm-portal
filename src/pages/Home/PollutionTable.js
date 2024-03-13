import React, { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Table } from "reactstrap"
import styles from "./Home.module.css"
import { get } from "helpers/api_helper"

const PollutionTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchTableData()
  }, [])

  const fetchTableData = async () => {
    try {
      const response = await get("data/latest-readings")
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getStyle = aqi => {
    let style = styles.successText
    if (aqi > 50 && aqi <= 100) {
      style = styles.moderateText
    }
    if (aqi > 100 && aqi <= 150) {
      style = styles.unhealthyText
    }
    if (aqi > 150 && aqi <= 200) {
      style = styles.dangerText
    }
    if (aqi > 200 && aqi <= 300) {
      style = styles.veryUnhealthyText
    }
    if (aqi > 300) {
      style = styles.hazardousText
    }

    return style
  }
  return (
    <Card className={styles.cardContainer}>
      <CardHeader className={styles.headerTable}>
        Orchard - Locations
      </CardHeader>
      {/* <CardBody>
        <div className="table-responsive">
          <Table className="table mb-0">
            <thead>
              <tr>
                <th className={styles.column1}>Locations</th>
                <th>Status</th>
                <th>AQI-NUST</th>
                <th>PM2.5</th>
                <th>CO2</th>
                <th>Temp</th>
                <th>Humid</th>
              </tr>
            </thead>
            <tbody>
              {data.map(node => (
                <tr key={node.node_id}>
                  <th className={styles.column1} scope="row">
                    {node.name}
                  </th>
                  <td className={getStyle(node.aqi)}>{node.status}</td>
                  <td>{node.aqi}</td>
                  <td>{node.dust}</td>
                  <td>{node.co2}</td>
                  <td>{node.temp}</td>
                  <td>{node.humid}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody> */}
    </Card>
  )
}

export default PollutionTable
