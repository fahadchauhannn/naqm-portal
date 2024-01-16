import React from "react"
import { Card, CardBody, CardHeader, Table } from "reactstrap"
import styles from "./Home.module.css"

const ForeCast = () => {
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
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THUR</th>
                <th>FRI</th>
                <th>SAT</th>
                <th>SUN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styles.column1} scope="row">
                  AQI
                </th>
                <td className={styles.warningText}>40</td>
                <td className={styles.warningText}>105</td>
                <td className={styles.successText}>34</td>
                <td className={styles.dangerText}>100</td>
                <td className={styles.warningText}>23</td>
                <td className={styles.successText}>26</td>
                <td className={styles.warningText}>50</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default ForeCast
