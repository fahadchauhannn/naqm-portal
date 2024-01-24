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
import { Link } from "react-router-dom"

import classNames from "classnames"

//import Charts
import StackedColumnChart from "./StackedColumnChart"

//import action
import { getChartsData as onGetChartsData } from "../../store/actions"

import modalimage1 from "../../assets/images/product/img-7.png"
import modalimage2 from "../../assets/images/product/img-4.png"

// Pages Components
import SocialSource from "./SocialSource"
import ActivityComp from "./ActivityComp"
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
      console.log(response.data, "Nodes Readings")
      setNodes(response.data)
      setSelectedNode(response.data[0])
    } catch (err) {
      console.log(err)
    }
  }

  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData,
  }))

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  const reports = [
    {
      title: "NO2",
      color: "warning",
      value: `${selectedNode?.no2}  ppm`,
      desc: "updated today",
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "CH4",
      color: "primary",
      value: `${selectedNode?.ch4}  ppm`,
      desc: "updated today",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "NH3",
      color: "info",
      value: `${selectedNode?.nh3}  ppm`,
      desc: "updated today",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "CO",
      icon: "mdi mdi-bitcoin",
      color: "warning",
      value: `${selectedNode?.co}  ppm`,
      desc: "updated today",
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "CO2",
      icon: "mdi mdi-ethereum",
      color: "primary",
      value: `${selectedNode.co2}  ppm`,
      desc: "updated today",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "Dust",
      icon: "mdi mdi-litecoin",
      color: "info",
      value: `${selectedNode.dust}  ug/m3`,
      desc: "updated today",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "PM10",
      icon: "mdi mdi-ethereum",
      color: "primary",
      value: `${selectedNode.pm_ten} ug/m3`,
      desc: "updated today",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "PM1.0",
      icon: "mdi mdi-litecoin",
      color: "info",
      value: `${selectedNode.pm_one}  ug/m3`,
      desc: "updated today",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
  ]

  const [periodData, setPeriodData] = useState([])
  const [periodType, setPeriodType] = useState("yearly")

  useEffect(() => {
    setPeriodData(chartsData)
  }, [chartsData])

  const onChangeChartPeriod = pType => {
    setPeriodType(pType)
    dispatch(onGetChartsData(pType))
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onGetChartsData("yearly"))
  }, [dispatch])

  //meta title
  document.title = "Dashboard | NAQM"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Row className="mb-4">
            <Col>
              <h4 className="card-title">Current Node : {selectedNode.name}</h4>
            </Col>
            <Col style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
                <DropdownToggle caret>Select Node</DropdownToggle>
                <DropdownMenu>
                  {nodes.map(node => (
                    <DropdownItem
                      key={node.node_id}
                      onClick={() => {
                        setSelectedNode(node)
                      }}
                    >
                      {node.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>

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
              <Row>
                <MiniWidget reports={reports} />
              </Row>
              <Row>
                <DataTable node={selectedNode.node_id} />
              </Row>
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
