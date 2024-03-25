import React, { useState } from "react"
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap"
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
import ECO1 from "../../assets/images/eco/eco1.jpeg"
import ECO2 from "../../assets/images/eco/eco2.jpeg"
import ECO3 from "../../assets/images/eco/eco3.jpeg"
import { useFormik } from "formik"
import * as Yup from "yup"
import styles from "./Home.module.css"
import { post } from "helpers/api_helper"
import AqiCategory from "./AqiCategory"

const HomePage = () => {
  //meta title
  document.title = "NAQM - NUST Air Quality Monitoring"

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      number: Yup.string().required("Please Enter Your Number"),
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Valid Email")
        .required("Please Enter Your Email"),
    }),
    onSubmit: values => {
      const newUser = {
        name: values["name"],
        email: values["email"],
        number: values["number"],
        product: selectedItem.name,
      }
      // save new user
      // dispatch(onAddNewUser(newUser))
      validation.resetForm()
      console.log(newUser)
      sendQuoteReq(newUser)
      toggle()
    },
  })

  const sendQuoteReq = async quoteObj => {
    try {
      const reponse = await post("quote", quoteObj)
    } catch (err) {
      console.log(err)
    }
  }

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Ecosniffer-V1",
      image: ECO1,
      features: [
        "Combines solar energy and a 10,000 mAh battery",
        "Addresses the dual challenge of industrial growth and environmental protection",
        "Provides real-time outdoor air quality data",
      ],
    },
    {
      id: 2,
      name: "Ecosniffer-V2",
      image: ECO2,
      features: [
        "Combines solar energy and a 10,000 mAh battery",
        "Addresses the dual challenge of industrial growth and environmental protection",
        "Provides real-time outdoor air quality data",
      ],
    },
    {
      id: 3,
      name: "Ecosniffer-V3",
      image: ECO3,
      features: [
        "Combines solar energy and a 10,000 mAh battery",
        "Addresses the dual challenge of industrial growth and environmental protection",
        "Provides real-time outdoor air quality data",
      ],
    },
  ])
  const [selectedItem, setSelectedItem] = useState()
  const [modal, setModal] = useState(false)
  const [getQuote, setGetQuote] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }

  const productClickHandler = item => {
    setSelectedItem(item)
    toggle()
  }

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
              <AqiCalendar />
              <AqiCategory />
              {/* <AqiChart dataColors='["--bs-warning"]' /> */}
            </Col>
            <Col md={8}>
              <CurrentAqiCard />
              <PollutionTable />
              <AqiChart dataColors='["--bs-primary"]' />
              <AirPollutantCard />
              <ForeCast />
            </Col>
          </Row>
          <Row style={{ marginTop: "25px" }}>
            {products.map(item => (
              <Col key={item.id} md={4}>
                <Card
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    productClickHandler(item)
                  }}
                >
                  <CardBody>
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.image}
                        style={{
                          width: "100%",
                        }}
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <CardTitle>{item.name}</CardTitle>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} tag="h4">
            {selectedItem?.name}
          </ModalHeader>
          {!getQuote && (
            <ModalBody>
              <Row>
                <h5>Key Features:</h5>
              </Row>
              <Row>
                <Col>
                  <ul>
                    {selectedItem?.features.map(item => (
                      <li key={item} className={styles.list}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Form
                  onSubmit={e => {
                    e.preventDefault()
                    validation.handleSubmit()
                    return false
                  }}
                >
                  <Row>
                    <Col xs={12}>
                      <div className="mb-3">
                        <Label className="form-label">Name</Label>
                        <Input
                          name="name"
                          type="text"
                          placeholder="Insert Name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.name || ""}
                          invalid={
                            validation.touched.name && validation.errors.name
                              ? true
                              : false
                          }
                        />
                        {validation.touched.name && validation.errors.name ? (
                          <FormFeedback type="invalid">
                            {validation.errors.name}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="Insert Email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Number</Label>
                        <Input
                          name="number"
                          type="text"
                          placeholder="Insert Number"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.number || ""}
                          invalid={
                            validation.touched.number &&
                              validation.errors.number
                              ? true
                              : false
                          }
                        />
                        {validation.touched.number &&
                          validation.errors.number ? (
                          <FormFeedback type="invalid">
                            {validation.errors.number}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="text-end">
                        <button
                          type="submit"
                          className="btn btn-success save-user"
                        >
                          Get Quote
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </ModalBody>
          )}
        </Modal>
      </div>
    </HorizontalLayout>
  )
}

export default HomePage
