

import React, { Fragment, useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { get } from "helpers/api_helper"
import { node } from "prop-types";
import pinIcon from "./mapImages/pin.png";
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


  const getRgbaColor = (color, transparency = 0.8) => {
    switch (color) {
      case "green":
        return `rgba(0, 128, 0, ${transparency})`;
      case "yellow":
        return `rgba(255, 255, 0, ${transparency})`;
      case "orange":
        return `rgba(255, 165, 0, ${transparency})`;
      case "red":
        return `rgba(255, 0, 0, ${transparency})`;
      case "purple":
        return `rgba(128, 0, 128, ${transparency})`;
      case "maroon":
        return `rgba(128, 0, 0, ${transparency})`;
      default:
        return `rgba(169, 169, 169, ${transparency})`; // Default color for unknown values
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

              lat: nodes.map((node) => node.lat),
              lon: nodes.map((node) => node.lng),
              mode: "markers+text",


              marker: {

                size: 75,


                color: nodes.map((data) => getRgbaColor(aqiColorRanges.find((range) => data.aqi >= range.min && data.aqi <= range.max)?.color, 0.65)),
                colorscale: getColorScale(),
                cmin: 0,
                cmax: 301,
                colorbar: {
                  title: "AQI",
                  ticksuffix: "",
                },
              },

              text: nodes.map((node) => `AQI: ${node.aqi}`),
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
              zoom: 14.8,
            },
          }}
          config={{ scrollZoom: false }}
        />
      </div>
    </Fragment>
  );
};

export default MapComponent;
