import TableContainer from "components/Common/TableContainer"
import { get } from "helpers/api_helper"
import React, { useEffect, useMemo, useState } from "react"

// const Date = cell => {
//   console.log("celll", cell)
//   return cell.value ? cell.value.slice(0, 10) : ""
// }

const DateCell = (cell) => {
  console.log("celll", cell);
  return cell.value
    ? new Date(cell.value).toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
      dateStyle: "medium",
      timeStyle: "medium",
    })
    : "";
};
const DataTable = props => {


  const { node } = props

  console.log(node, "Node for table data")
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchNodesData()
  }, [node])

  const fetchNodesData = async () => {
    try {
      const response = await get(`data/latest-readings/node/${node}`);
      console.log('res form node ', response);
      // Assuming the response data has a "created_at" field
      const sortedData = response.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      // Reverse the order to have the latest date data at the top
      const reversedData = sortedData.reverse();

      setTableData(reversedData);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = useMemo(() => {
    let cols = [
      {
        Header: "Created At",
        accessor: "created_at",
        Cell: (cellProps) => <DateCell {...cellProps} />,
      },
      {
        Header: "Node Id",
        accessor: "node_id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Dust",
        accessor: "dust",
      },
      {
        Header: "CO",
        accessor: "co",
      },
      {
        Header: "CO₂",
        accessor: "co2",
      },
      {
        Header: "NO₂",
        accessor: "no2",
      },
      // {
      //   Header: "CH4",
      //   accessor: "ch4",
      // },
      // {
      //   Header: "NH3",
      //   accessor: "nh3",
      // },
      {
        Header: "PM₁.₀",
        accessor: "pm_one",
      },
      {
        Header: "PM₁₀",
        accessor: "pm_ten",
      },
      {
        Header: "Humid",
        accessor: "humid",
      },
      {
        Header: "Temp",
        accessor: "temp",
      },
      {
        Header: "lat",
        accessor: "lat",
      },
      {
        Header: "long",
        accessor: "lng",
      },
    ];

    const indexOfNO2 = cols.findIndex((col) => col.accessor === "no2");

    if (indexOfNO2 !== -1 && tableData.length > 0 && tableData[tableData.length - 1].SO2 !== -4000) {
      cols.splice(indexOfNO2 + 1, 0, {
        Header: "SO₂",
        accessor: "SO2",
      });
    }

    return cols;
  }, [tableData]);

  return (
    <div>
      <TableContainer
        columns={columns}
        data={tableData}
        isGlobalFilter={false}
        isAddOptions={false}
        customPageSize={10}
        className="custom-header-css"
      />
    </div>
  )
}

export default DataTable
