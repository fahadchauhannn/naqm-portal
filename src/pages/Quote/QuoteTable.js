import React, { useEffect, useState, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import TableContainer from "components/Common/TableContainer"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  UncontrolledTooltip,
  Input,
  Form,
} from "reactstrap"

import { Name, Email, Number, Date, Product } from "./QuoteListCol"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//redux
import { useSelector, useDispatch } from "react-redux"
import { get } from "helpers/api_helper"

const QuoteTable = props => {
  //meta title
  document.title = "Quote Req List"

  const [quotes, setQuotes] = useState([])

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "created_at",
        filterable: true,
        Cell: cellProps => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
        Cell: cellProps => {
          return <Name {...cellProps} />
        },
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
        Cell: cellProps => {
          return <Email {...cellProps} />
        },
      },
      {
        Header: "Number",
        accessor: "number",
        Cell: cellProps => {
          return <Number {...cellProps} />
        },
      },
      {
        Header: "Product",
        accessor: "product",
        Cell: cellProps => {
          return <Product {...cellProps} />
        },
      },
    ],
    []
  )

  useEffect(() => {
    fetchQuoteReqs()
  }, [])

  const fetchQuoteReqs = async () => {
    try {
      const reponse = await get("admin/quote")
      console.log(quotes, "quotes")
      setQuotes(reponse.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Quotes List" breadcrumbItem="Quote List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={quotes}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(QuoteTable)
