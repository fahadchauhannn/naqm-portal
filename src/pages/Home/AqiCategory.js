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
              <tr className={styles.successColor}>
                <td className={styles.successColor}>Good</td>
                <td className={styles.successColor}>Green</td>
                <td className={styles.successColor}>0 to 50</td>
              </tr>
              <tr className={styles.moderate}>
                <td className={styles.moderate}>Moderate</td>
                <td className={styles.moderate}>Yellow</td>
                <td className={styles.moderate}>51 to 100</td>
              </tr>
              <tr className={styles.unhealthy}>
                <td className={styles.unhealthy}>Unhealthy(Sensetive)</td>
                <td className={styles.unhealthy}>Orange</td>
                <td className={styles.unhealthy}>101 to 150</td>
              </tr>
              <tr className={styles.danger}>
                <td className={styles.danger}>Unhealthy</td>
                <td className={styles.danger}>Red</td>
                <td className={styles.danger}>151 to 200</td>
              </tr>
              <tr className={styles.veryUnhealthy}>
                <td className={styles.veryUnhealthy}>Very Unhealthy</td>
                <td className={styles.veryUnhealthy}>Purple</td>
                <td className={styles.veryUnhealthy}>201 to 300</td>
              </tr>
              <tr className={styles.hazardous}>
                <td className={styles.hazardous}>Hazardous</td>
                <td className={styles.hazardous}>Maroon</td>
                <td className={styles.hazardous}>301 & higher</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default AqiCategory
