import React, { useEffect, useState } from "react"
import { Card, CardBody, CardFooter, CardTitle, Table } from "reactstrap"
import styles from "./Home.module.css"

const AqiCategory = () => {
  return (
    <Card>
      <CardBody>
        {/* <CardTitle className={styles.title}>Air Quality Index</CardTitle> */}
        <div className="table-responsive">
          <Table className="table mb-0">
            <thead>
              <tr>
                <th>Category</th>
                <th>Color</th>
                <th>AQI</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.success}>
                <td>Good</td>
                <td>Green</td>
                <td>0 to 50</td>
              </tr>
              <tr className={styles.moderate}>
                <td>Moderate</td>
                <td>Yellow</td>
                <td>51 to 100</td>
              </tr>
              <tr className={styles.unhealthy}>
                <td>Unhealthy(Sensetive)</td>
                <td>Orange</td>
                <td>101 to 150</td>
              </tr>
              <tr className={styles.danger}>
                <td>Unhealthy</td>
                <td>Red</td>
                <td>151 to 200</td>
              </tr>
              <tr className={styles.veryUnhealthy}>
                <td>Very Unhealthy</td>
                <td>Purple</td>
                <td>201 to 300</td>
              </tr>
              <tr className={styles.hazardous}>
                <td>Hazardous</td>
                <td>Maroon</td>
                <td>301 & higher</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default AqiCategory
