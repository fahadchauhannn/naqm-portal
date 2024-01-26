  import React, { useEffect, useState } from "react"
  import { Card, CardBody, CardFooter, CardTitle, Table } from "reactstrap"
  import styles from "./Home.module.css"
  import { get } from "helpers/api_helper"

  const AqiContainer = props => {
    let style = styles.success
    if (props.children > 50 && props.children <= 100) {
      style = styles.moderate
    }
    if (props.children > 100 && props.children <= 150) {
      style = styles.unhealthy
    }
    if (props.children > 150 && props.children <= 200) {
      style = styles.danger
    }
    if (props.children > 200 && props.children <= 300) {
      style = styles.veryUnhealthy
    }
    if (props.children > 300) {
      style = styles.hazardous
    }
    return <div className={`${styles.aqiCon} ${style}`}>{props.children}</div>
  }

  const CleanestListCard = () => {
    const [nodes, setNodes] = useState([])

    useEffect(() => {
      fetchCleanestNodes()
    }, [])

    const fetchCleanestNodes = async () => {
      try {
        const reponse = await get("data/readings-by-type/cleanest")
        setNodes(reponse.data)
      } catch (err) {
        console.log(err)
      }
    }
    return (
      <Card>
        <CardBody>
          <CardTitle className={styles.title}>
            Least Polluted Nodes in NUST
          </CardTitle>
          <p className="text-muted">Realtime best node Ranking</p>
          <div className="table-responsive">
            <Table className="table mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Node</th>
                  <th>AQI</th>
                </tr>
              </thead>
              <tbody>
                {nodes.map((node, index) => (
                  <tr key={node.node_id}>
                    <th scope="row">{index + 1}</th>
                    <td>{node.name}</td>
                    <td>
                      <AqiContainer>{node.aqi}</AqiContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <CardFooter className={styles.footerCard}></CardFooter>
        </CardBody>
      </Card>
    )
  }

  export default CleanestListCard
