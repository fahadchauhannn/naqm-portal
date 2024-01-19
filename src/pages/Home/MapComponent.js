import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"
import { get } from "helpers/api_helper"
import LightData from "pages/Maps/LightData"
import React, { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"

const LoadingContainer = () => <div>Loading...</div>

const MapComponent = props => {
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

  return (
    <div
      id="gmaps-overlay"
      className="gmaps mb-5"
      style={{ position: "relative" }}
    >
      <Map
        google={props.google}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        styles={LightData.Data}
        initialCenter={{
          lat: 33.643034447738955,
          lng: 72.98970798650696,
        }}
      >
        {nodes.map(node => (
          <Marker
            key={node.node_id}
            onClick={() => {
              onMarkerClick(node.aqi)
            }}
            position={{ lat: node.lat, lng: node.lng }}
            title={node.name}
            name={node.name}
          />
        ))}

        <InfoWindow>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

// export default MapComponent

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyC9_hCPTKU5fQdKuJ94VL-qeDKgvPWtwVw",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(MapComponent)
)
