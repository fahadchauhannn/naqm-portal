import getChartColorsArray from "components/Common/ChartsDynamicColor"
import React from "react"
import ReactApexChart from "react-apexcharts"
import { Card, CardBody } from "reactstrap"

const AqiChart = ({ dataColors }) => {
  const spineareaChartColors = getChartColorsArray(dataColors)

  const series = [
    {
      name: "AQI-NUST",
      data: [34, 40, 28, 52, 42, 109, 100],
    },
  ]

  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: spineareaChartColors,
    yaxis: {
      title: {
        text: "AQI-Nust",
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  }

  return (
    <Card>
      <CardBody>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="350"
        />
      </CardBody>
    </Card>
  )
}

export default AqiChart
