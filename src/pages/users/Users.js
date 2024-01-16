import React from "react"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import UserTable from "./UserTable"

const Users = () => {
  //meta title
  document.title = "Stater Page | Skote - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Users" breadcrumbItem="Users" />
          <UserTable />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Users
