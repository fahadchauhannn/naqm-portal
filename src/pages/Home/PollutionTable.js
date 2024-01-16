import React from "react"
import { Card, CardBody, CardHeader, Table } from "reactstrap"
import styles from "./Home.module.css"

const PollutionTable = () => {
  return (
    <Card className={styles.cardContainer}>
      <CardHeader className={styles.headerTable}>
        NUST- Locations Air Pullution Level
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table mb-0">
            <thead>
              <tr>
                <th className={styles.column1}>Locations</th>
                <th>Status</th>
                <th>AQI-NUST</th>
                <th>PM2.5</th>
                <th>PM10</th>
                <th>Temp</th>
                <th>Humid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styles.column1} scope="row">
                  Node-1
                </th>
                <td className={styles.dangerText}>Poor</td>
                <td>105</td>
                <td>34</td>
                <td>0</td>
                <td>23</td>
                <td>26</td>
              </tr>
              <tr>
                <th className={styles.column1} scope="row">
                  Node-2
                </th>
                <td className={styles.warningText}>Moderate</td>
                <td>97</td>
                <td>37</td>
                <td>1</td>
                <td>23</td>
                <td>26</td>
              </tr>
              <tr>
                <th className={styles.column1} scope="row">
                  Node-3
                </th>
                <td className={styles.dangerText}>Poor</td>
                <td>120</td>
                <td>37</td>
                <td>1</td>
                <td>23</td>
                <td>26</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default PollutionTable
