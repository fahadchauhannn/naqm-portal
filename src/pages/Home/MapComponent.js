


// import React, { useEffect, useRef, useState, Fragment } from "react"


// import "../../../node_modules/leaflet/dist/leaflet.css";
// import HeatmapLayer from "react-leaflet-heatmap-layer";

// import Plot from "react-plotlyjs";


// const MapComponent = props => {


//   const state = {
//     lat: 48.137154,
//     lng: 11.576124,
//     zoom: 12,
//     position: [48.137154, 11.576124],
//   };

//   const addressPoints = [
//     [48.2, 11.62, 20],
//     [48.0, 11.51, 10],
//     [48.08, 11.7, 30],
//     [48.11, 11.5, 40],
//     [48.11, 11.6, 60],
//     [48.137154, 11.576124, 100],
//   ];




//   function MapPlaceholder() {
//     return (
//       <p>
//         Map of London.{' '}
//         <noscript>You need to enable JavaScript to see this map.</noscript>
//       </p>
//     )
//   }
//   return (
//     <Fragment>
//       <div style={{ minHeight: "70vh", minWidth: "100vw", height: "100%", width: "100%" }}>
//         <Plot
//           data={[
//             {
//               type: "scattermapbox",
//               lat: addressPoints.map((point) => point[0]),
//               lon: addressPoints.map((point) => point[1]),
//               mode: "markers",
//               marker: {
//                 size: 14,
//                 // color: addressPoints.map((point) => point[2]),
//                 color: 'red',
//                 colorscale: "Viridis",
//                 cmin: 0,
//                 cmax: 100,
//                 colorbar: {
//                   title: "AQI",
//                   ticksuffix: "",
//                 },
//               },
//               text: addressPoints.map((point) => `AQI: ${point[2]}`),
//             },
//           ]}
//           layout={{
//             autosize: true,
//             hovermode: "closest",
//             mapbox: {
//               style: "open-street-map",
//               center: { lat: addressPoints[0][0], lon: addressPoints[0][1] },
//               zoom: 12,
//             },
//           }}
//           config={{ scrollZoom: false }}
//         />
//       </div>
//     </Fragment>



//   )
// }

// export default MapComponent




import React, { Fragment, useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { get } from "helpers/api_helper"
const MapComponent = (props) => {




  const [nodes, setNodes] = useState([])
  const selectedPlace = {}
  function onMarkerClick(aqi) {
    alert(`Current AQI of this node is ${aqi}`)
  }

  useEffect(() => {
    fetchMapReadings()
  }, [])

  const fetchMapReadings = async () => {
    try {
      const reponse = await get("data/map-readings")
      setNodes(reponse.data)
    } catch (err) {
      console.log(err)
    }
  }


  const [plotDimensions, setPlotDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const calculateDimensions = () => {
      const width = window.innerWidth * 0.01 * 98; // Convert 100vw to pixels
      let height;

      const Mheight = window.innerHeight * 0.01 * 50; // Convert 100vh to pixels
      const Dheight = window.innerHeight * 0.01 * 90; // Convert 100vh to pixels

      if (window.innerWidth < 950) {
        height = Mheight;
      } else {
        height = Dheight;
      }

      setPlotDimensions({ width, height });
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  const aqiColorRanges = [
    { min: 0, max: 50, color: "green" },
    { min: 51, max: 100, color: "yellow" },
    { min: 101, max: 150, color: "orange" },
    { min: 151, max: 200, color: "red" },
    { min: 201, max: 300, color: "purple" },
    { min: 301, max: Infinity, color: "maroon" },


  ]

  const sensor_data = [
    [33.646702, 72.994733, 200],
    [33.643094, 72.989833, 290],
    [33.642983, 72.988272, 100],
  ];

  const getRgbColor = (color) => {
    switch (color) {
      case "green":
        return 'rgb(0, 128, 0)';
      case "yellow":
        return 'rgb(255, 255, 0)';
      case "orange":
        return 'rgb(255, 165, 0)';
      case "red":
        return 'rgb(255, 0, 0)';
      case "purple":
        return 'rgb(128, 0, 128)';
      case "maroon":
        return 'rgb(128, 0, 0)';
      default:
        return 'rgb(169, 169, 169)'; // Default color for unknown values
    }
  };
  const getColorScale = () => {
    return [
      ['0.0', 'rgb(0, 128, 0)'],
      ['0.3', 'rgb(255, 255, 0)'],
      ['0.45', 'rgb(255, 165, 0)'],
      ['0.64', 'rgb(255, 0, 0)'],
      ['0.87', 'rgb(128, 0, 100)'],
      ['1.0', 'rgb(128, 0, 0)'],
    ];
  };

  return (
    <Fragment>
      <div style={{ minHeight: `${plotDimensions.height}px`, minWidth: "100vw", height: `${plotDimensions.height}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Plot
          style={{ minHeight: `${plotDimensions.height}px`, minWidth: "100vw", height: `${plotDimensions.height}px`, width: "100%" }}
          data={[
            {
              width: '100vw',
              type: "scattermapbox",
              lat: sensor_data.map((data) => data[0]),
              lon: sensor_data.map((data) => data[1]),
              // lat: nodes.map((node) => node.lat),
              // lon: nodes.map((node) => node.lng),
              mode: "markers",
              marker: {
                size: 70,
                color: sensor_data.map((data) => getRgbColor(aqiColorRanges.find((range) => data[2] >= range.min && data[2] <= range.max)?.color)),
                colorscale: getColorScale(),
                cmin: 0,
                cmax: 301,
                colorbar: {
                  title: "AQI",
                  ticksuffix: "",
                },
              },
              text: sensor_data.map((data) => `AQI: ${data[2]}`),
              // text: nodes.map((node) => `AQI: ${node.aqi}`),
            },
          ]}
          layout={{
            width: plotDimensions.width,
            height: plotDimensions.height,
            autosize: true,
            hovermode: "closest",
            mapbox: {
              style: "open-street-map",
              center: { lat: 33.643034447738955, lon: 72.98970798650696 },
              zoom: 15,
            },
          }}
          config={{ scrollZoom: false }}
        />
      </div>
    </Fragment>
  );
};

export default MapComponent;
