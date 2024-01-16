import React from "react"
import { Col, Container, Row } from "reactstrap"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import MapsGoogle from "pages/Maps/MapsGoogle"
import MapComponent from "./MapComponent"
import PollutedListCard from "./PollutedListCard"
import CleanestListCard from "./CleanestListCard"
import CurrentAqiCard from "./CurrentAqiCard"
import PollutionTable from "./PollutionTable"
import AirPollutantCard from "./AirPollutantCard"
import AqiChart from "./AqiChart"
import ForeCast from "./ForeCast"
import AqiCalendar from "./AqiCalendar"
import Headline from "./Headline"
import HorizontalLayout from "components/HorizontalLayout"

const HomePage = () => {
  //meta title
  document.title = "NAQM - NUST Air Quality Monitoring"

  return (
    <HorizontalLayout>
      <div className="page-content">
        <Headline />
        <MapComponent />
        <Container fluid>
          <Row>
            <Col md={4}>
              <PollutedListCard />
              <CleanestListCard />
              <AqiChart dataColors='["--bs-warning"]' />
              <AqiCalendar />
            </Col>
            <Col md={8}>
              <CurrentAqiCard />
              <PollutionTable />
              <AqiChart dataColors='["--bs-primary"]' />
              <AirPollutantCard />
              <ForeCast />
            </Col>
          </Row>
        </Container>
      </div>
    </HorizontalLayout>
  )
}

export default HomePage
