import getChartColorsArray from "components/Common/ChartsDynamicColor"
import { get } from "helpers/api_helper"
import React, { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { Card, CardBody } from "reactstrap"

const AqiChart = ({ dataColors }) => {
  const spineareaChartColors = getChartColorsArray(dataColors)
  const [series, setSeries] = useState([])
  const [labels, setLabels] = useState([])
  // const [data, setData] = useState([])

  useEffect(() => {
    fetchGraphData()
  }, [])

  const fetchGraphData = async () => {
    try {
      const response = await get("data/aqi-graph")
      const data = response.data.map(item => {
        return item.aqi
      })
      const label = response.data.map(item => {
        return `${item.date.year}-${String(item.date.month).padStart(
          2,
          "0"
        )}-${String(item.date.day).padStart(2, "0")}`
      })

      console.log(label, "label")
      setLabels(label)
      setSeries([
        {
          name: "AQI-MUST",
          data: data,
        },
      ])
    } catch (err) {
      console.log(err)
    }
  }

  // const series = [
  //   {
  //     name: "AQI-NUST",
  //     data: [34, 40, 28, 52, 42, 109, 100],
  //   },
  // ]

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
      categories: labels,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return Math.round(value); // Round values to remove decimal points
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
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
