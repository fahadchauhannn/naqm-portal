import React from "react"
import ReactApexChart from "react-apexcharts"

import getChartColorsArray from "../../components/Common/ChartsDynamicColor"

const JobWidgetCharts = ({ dataColors, series }) => {
  var areacharteathereumColors = getChartColorsArray(dataColors)

  var options = {
    chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100],
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ""
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: areacharteathereumColors,
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="46"
        width="130"
        className="apex-charts"
      />
    </React.Fragment>
  )
}

const StatisticsApplicationsChart = ({ seriesData, dataColors }) => {
  var statisticsApplicationColors = getChartColorsArray(dataColors)
  console.log("Series Data", seriesData)

  const series = [
    {
      name: "Dust",
      type: "column",
      data: seriesData.dust || [],
    },
    {
      name: "CO",
      type: "column",
      data: seriesData.co || [],
    },
    {
      name: "AQI",
      type: "area",
      data: seriesData.aqi || [],
    },
    {
      name: "CO2",
      type: "line",
      data: seriesData.co2 || [],
    },
  ]
  var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      offsetY: 10,
    },
    stroke: {
      width: [0, 0, 2, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
      },
    },
    fill: {
      opacity: [1, 1, 0.1, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: seriesData.labels || [],
    colors: statisticsApplicationColors,
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return Math.round(value); // Round values to remove decimal points
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points"
          }
          return y
        },
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart

        options={options}
        series={series}
        type="line"
        height="350"
        className="apex-charts pb-3"
      />
    </React.Fragment>
  )
}

const ReceivedTimeCharts = ({ dataColors }) => {
  var ApplicationReveicedTimeColors = getChartColorsArray(dataColors)

  const series = [
    {
      name: "Received Application",
      data: [34, 44, 54, 21, 12, 43, 33, 80, 66],
    },
  ]
  var options = {
    chart: {
      type: "line",
      height: 378,
      toolbar: {
        show: false,
      },
    },
    // stroke: {
    //     curve: 'stepline',
    // },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    labels: [
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
      "12 PM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
    ],
    dataLabels: {
      enabled: false,
    },
    colors: ApplicationReveicedTimeColors,
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="378px"
        width="456px"
        className="apex-charts"
      />
    </React.Fragment>
  )
}

export { JobWidgetCharts, StatisticsApplicationsChart, ReceivedTimeCharts }
