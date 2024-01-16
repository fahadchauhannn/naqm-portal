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

const series1 = [
  { name: "BTC", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
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
    fixed: { enabled: false },
    x: { show: false },
    marker: { show: false },
  },
}

//Etherium Chart
const series2 = [
  { name: "ETH", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
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
    fixed: { enabled: false },
    x: { show: false },
    marker: { show: false },
  },
}

//LiteCoin Chart
const series3 = [
  { name: "LTC", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
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
    fixed: { enabled: false },
    x: { show: false },
    marker: { show: false },
  },
}

const Dashboard = props => {
  const [modal, setmodal] = useState(false)
  const [subscribemodal, setSubscribemodal] = useState(false)

  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData,
  }))

  // const reports = [
  //   { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
  //   { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
  //   { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
  //   { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
  //   { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
  //   { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
  //   { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
  //   {
  //     title: "Average Price",
  //     iconClass: "bx-purchase-tag-alt",
  //     description: "$16.2",
  //   },
  // ]

  const reports = [
    {
      title: "NO2",
      icon: "mdi mdi-bitcoin",
      color: "warning",
      value: "202 ppm",
      desc: "+ 0.0012 ( 0.2 % )",
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "CH4",
      icon: "mdi mdi-ethereum",
      color: "primary",
      value: "300 ppm",
      desc: "- 4.102 ( 0.1 % )",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "NH3",
      icon: "mdi mdi-litecoin",
      color: "info",
      value: "100 ppm",
      desc: "+ 1.792 ( 0.1 % )",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "NO2",
      icon: "mdi mdi-bitcoin",
      color: "warning",
      value: "202 ppm",
      desc: "+ 0.0012 ( 0.2 % )",
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "CH4",
      icon: "mdi mdi-ethereum",
      color: "primary",
      value: "202 ppm",
      desc: "- 4.102 ( 0.1 % )",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "NH3",
      icon: "mdi mdi-litecoin",
      color: "info",
      value: "300 ppm",
      desc: "+ 1.792 ( 0.1 % )",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "CH4",
      icon: "mdi mdi-ethereum",
      color: "primary",
      value: "100 ppm",
      desc: "- 4.102 ( 0.1 % )",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "NH3",
      icon: "mdi mdi-litecoin",
      color: "info",
      value: "50 ppm",
      desc: "+ 1.792 ( 0.1 % )",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
  ]

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSubscribemodal(true)
  //   }, 2000)
  // }, [])

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
  document.title = "Dashboard | Skote - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />

          <Row>
            <Col xl="12">
              <Row>
                <Col xl="4">
                  {/* <WelcomeComp /> */}
                  <CurrentAqi />
                </Col>
                <Col xl="8">
                  <StatisticsApplications />
                </Col>
              </Row>
              <Row>
                <MiniWidget reports={reports} />
              </Row>
              <Row>
                <DataTable />
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
