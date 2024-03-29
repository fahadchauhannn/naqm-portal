import React, { useState, useEffect } from "react"
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap"
import { StatisticsApplicationsChart } from "./JobCharts"
import { get } from "helpers/api_helper"

const StatisticsApplications = () => {
  const [duration, setDuration] = useState("week")
  const [data, setData] = useState({})

  const changeDuration = duration => {
    setDuration(duration)
  }
  useEffect(() => {
    fetchData()
  }, [duration])

  const fetchData = async () => {
    try {
      const response = await get(`admin/data/average-graph/${duration}`)
      console.log(response.data, "my data graph")
      let labels
      if (duration === "week") {
        labels = response.data.labels?.map(date => {
          return `${date.year}-${String(date.month).padStart(2, "0")}-${String(
            date.day
          ).padStart(2, "0")}`
        })
      }
      if (duration === "month") {
        labels = response.data.labels?.map(date => {
          return `${date.year}-${String(date.month).padStart(2, "0")}`
        })
      }
      if (duration === "year") {
        labels = response.data.labels?.map(date => {
          return `${date.year}`
        })
      }



      console.log("Label", labels)
      setData({ ...response.data, labels })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <React.Fragment>
      <Col lg={12}>
        <Card>
          <CardBody>
            <div className="d-sm-flex flex-wrap">
              <h4 className="card-title mb-4">AIR QUALITY INDEX</h4>
              <div className="ms-auto">
                <Nav pills>
                  <NavItem>
                    <NavLink
                      className={duration === "week" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("week")}
                    >
                      Week
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={duration === "month" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("month")}
                    >
                      Month
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={duration === "year" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("year")}
                    >
                      Year
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            <StatisticsApplicationsChart
              seriesData={data}
              dataColors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info", "#967969","#FFB6C1","#ADD8E6"]'
              dir="ltr"
            />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default StatisticsApplications
