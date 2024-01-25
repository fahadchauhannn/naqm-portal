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
  const statistic_data = {
    year: {
      companay: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84],
      newjobs: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78],
      totaljobs: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      jobview: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      label: [
        "01/01/2023",
        "02/01/2022",
        "03/01/2021",
        "04/01/2020",
        "05/01/2019",
        "06/01/2018",
        "07/01/2017",
        "08/01/2016",
        "09/01/2015",
        "10/01/2014",
        "11/01/2013",
      ],
    },
    month: {
      companay: [25, 95, 87, 14, 56, 12, 14, 56, 35, 14, 25],
      newjobs: [85, 87, 56, 45, 14, 87, 56, 98, 19, 51, 78, 49],
      totaljobs: [85, 75, 95, 48, 59, 68, 15, 35, 26, 45, 59, 57],
      jobview: [78, 89, 84, 98, 67, 59, 48, 42, 35, 29, 18, 59],
      label: [
        "01/01/2022",
        "02/02/2022",
        "03/03/2022",
        "04/04/2022",
        "05/05/2022",
        "06/06/2022",
        "07/07/2022",
        "08/08/2022",
        "09/09/2022",
        "10/10/2022",
        "11/11/2022",
      ],
    },
    week: {
      companay: [30, 48, 28, 74, 39, 87, 54],
      newjobs: [52, 43, 69, 75, 49, 28, 56],
      totaljobs: [57, 49, 68, 87, 71, 29, 49],
      jobview: [78, 84, 95, 76, 68, 57, 48],
      label: [
        "01/01/2022",
        "01/02/2022",
        "01/03/2022",
        "01/04/2022",
        "01/05/2022",
        "01/06/2022",
        "01/07/2022",
      ],
    },
  }

  const fetchData = async () => {
    try {
      const response = await get(`admin/data/average-graph/${duration}`)
      console.log(response.data, "my data graph")
      const labels = response.data.labels?.map(date => {
        return `${date.year}-${String(date.month).padStart(2, "0")}-${String(
          date.day
        ).padStart(2, "0")}`
      })
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
              dataColors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]'
              dir="ltr"
            />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default StatisticsApplications
