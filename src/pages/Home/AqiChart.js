import getChartColorsArray from "components/Common/ChartsDynamicColor"
import { get } from "helpers/api_helper"
import React, { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { Card, CardBody } from "reactstrap"
import styles from "./Home.module.css"; // Import styles from Home.module.css

const AqiChart = ({ dataColors }) => {
  const spineareaChartColors = getChartColorsArray(dataColors)
  const [series, setSeries] = useState([])
  const [labels, setLabels] = useState([])


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

      setLabels(label)
      setSeries([
        {
          name: "AQI-NUST",
          data: data,
        },
      ])
    } catch (err) {
      console.log(err)
    }
  }
  const getBarStyle = aqi => {
    if (aqi > 0 && aqi <= 50) {
      return '#008a00';
    } else if (aqi > 50 && aqi <= 100) {
      return '#E91E63';
    } else if (aqi > 100 && aqi <= 150) {
      return '#9C27B0';
    } else if (aqi > 150 && aqi <= 200) {
      return '#673AB7';
    } else if (aqi > 200 && aqi <= 300) {
      return '#3F51B5';
    } else {
      return '#2196F3';
    }
  };

  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: [
      function ({ value }) {
        if (value > 0 && value <= 50) {
          return '#008a00';
        } else if (value > 50 && value <= 100) {
          return '#ffff00';
        } else if (value > 100 && value <= 150) {
          return '#ffa500';
        } else if (value > 150 && value <= 200) {
          return '#ff0000';
        } else if (value > 200 && value <= 300) {
          return '#800080';
        } else {
          return '#800000';
        }
      }
    ],

    xaxis: {
      type: "datetime",
      categories: labels,
    },
    yaxis: {
      title: {
        text: "AQI",
        offsetX: 2,
      },
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
          type="bar"
          height="350"

        />
      </CardBody>
    </Card>
  )
}

export default AqiChart