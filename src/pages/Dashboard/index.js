import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,

} from "reactstrap"

//import Charts
import StackedColumnChart from "./StackedColumnChart"

//import action
import { getChartsData as onGetChartsData } from "../../store/actions"

// Pages Components
import TopCities from "./TopCities"
import LatestTranaction from "./LatestTranaction"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"

//redux
import { useSelector, useDispatch } from "react-redux"
import CurrentAqi from "./MonthlyEarning"
import StatisticsApplications from "pages/Dashboard/StatisticsApplications"
import DatatableTables from "pages/Tables/DatatableTables"
import DataTable from "./DataTable"
import MiniWidget from "./mini-widget"
import { get } from "helpers/api_helper"

const series1 = [
  { name: "Data", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
]
const options1 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: {
    enabled: false,
  },
}

//Etherium Chart
const series2 = [
  { name: "Data", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
]
const options2 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#556ee6"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: {
    enabled: false,
  },
}

//LiteCoin Chart
const series3 = [
  { name: "Data", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
]
const options3 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#50a5f1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: {
    enabled: false,
  },
}

const Dashboard = props => {
  const [modal, setmodal] = useState(false)
  const [nodes, setNodes] = useState([])
  const [selectedNode, setSelectedNode] = useState({})

  useEffect(() => {
    fetchNodesData()
  }, [])

  const fetchNodesData = async () => {
    try {
      const response = await get("data/latest-readings")
      setNodes(response.data)
      setSelectedNode(response.data[0])
    } catch (err) {
      console.log(err)
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  const reports = [
    {
      value: "Strawberry",
      color: "warning",
      title: `Estimated Yeild Over The Year`,
      // : "updated today",
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      value: "Oranges",
      color: "primary",
      title: `Estimated Yeild Over The Year`,

      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      value: "Apple",
      color: "info",
      title: `Estimated Yeild Over The Year`,

      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      value: "Melon",
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: `${selectedNode?.co}  ppm`,

      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      value: "Grapes",
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: `Estimated Yeild Over The Year`,

      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      value: "Avocado",
      icon: "mdi mdi-litecoin",
      color: "info",
      title: `Estimated Yeild Over The Year`,

      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      value: "Cheery",
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: `Estimated Yeild Over The Year`,

      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      value: "Lemon",
      icon: "mdi mdi-litecoin",
      color: "info",
      title: `Estimated Yeild Over The Year`,

      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
  ]

  //meta title
  document.title = "Dashboard | Citrus Park"

  return (
    <React.Fragment>
      <div className="page-content " >
        <Container fluid s>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          {/* <Row className="mb-4"> */}

          {/* <Col style={{ display: "flex", flexDirection: "row-reverse" }}> */}
          {/* input a video here i mean show a video here and a button below to upload a video  */}
          {/* <Input type="" /> */}
          {/* </Col> */}
          {/* </Row> */}

          <Row>
            <Col xl="12">
              <Row>
                <Col xl="4">
                  {/* <WelcomeComp /> */}
                  <CurrentAqi node={selectedNode} />
                </Col>
                <Col xl="8">

                  <StatisticsApplications />
                </Col>
              </Row>
              <Row style={{ marginTop: '70px' }}>
                <MiniWidget reports={reports} />
              </Row>
              {/* <Row>
                <DataTable node={selectedNode?.node_id} />
              </Row> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
