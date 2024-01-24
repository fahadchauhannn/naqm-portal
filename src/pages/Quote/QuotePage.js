import React from "react"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import QuoteTable from "./QuoteTable"

const QuotePage = () => {
  //meta title
  document.title = "Quote Page "

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Quote Requests" breadcrumbItem="Quote Requests" />
          <QuoteTable />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default QuotePage
