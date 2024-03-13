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
                <th>Month</th>
                <th>Count</th>

              </tr>
            </thead>
            <tbody>
              <tr className={styles.successColor}>

                <td className={styles.successColor}>January</td>
                <td className={styles.successColor}>2500</td>
              </tr>
              <tr className={styles.moderate}>

                <td className={styles.moderate}>Febuary</td>
                <td className={styles.moderate}>3512</td>
              </tr>
              <tr className={styles.unhealthy}>

                <td className={styles.unhealthy}>March</td>
                <td className={styles.unhealthy}>4621</td>
              </tr>
              <tr className={styles.danger}>

                <td className={styles.danger}>April</td>
                <td className={styles.danger}>981</td>
              </tr>
              <tr className={styles.veryUnhealthy}>

                <td className={styles.veryUnhealthy}>May</td>
                <td className={styles.veryUnhealthy}>991</td>
              </tr>
              <tr className={styles.hazardous}>

                <td className={styles.hazardous}>June</td>
                <td className={styles.hazardous}>2300</td>
              </tr>
              <tr className={styles.unhealthy}>

                <td className={styles.unhealthy}>July</td>
                <td className={styles.unhealthy}>2352</td>
              </tr>
              <tr className={styles.successColor}>

                <td className={styles.successColor}>August</td>
                <td className={styles.successColor}>8123</td>
              </tr>
              <tr className={styles.danger}>

                <td className={styles.danger}>September</td>
                <td className={styles.danger}>551</td>
              </tr>
              <tr className={styles.moderate}>

                <td className={styles.moderate}>October</td>
                <td className={styles.moderate}>1200</td>
              </tr>
              <tr className={styles.unhealthy}>

                <td className={styles.unhealthy}>November</td>
                <td className={styles.unhealthy}>1244</td>
              </tr>
              <tr className={styles.danger}>

                <td className={styles.danger}>December</td>
                <td className={styles.danger}>1294</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default AqiCategory
