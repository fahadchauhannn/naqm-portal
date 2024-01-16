import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"
import LightData from "pages/Maps/LightData"
import React, { useRef } from "react"
import { connect } from "react-redux"

const LoadingContainer = () => <div>Loading...</div>

const MapComponent = props => {
  const selectedPlace = {}
  function onMarkerClick() {
    alert("Current AQI of this node is 165")
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
          lat: 33.64505870722462,
          lng: 72.9924019430869,
        }}
      >
        <Marker
          onClick={() => {
            onMarkerClick()
          }}
          position={{ lat: 33.64301392354466, lng: 72.99061729274453 }}
          title={"Node 1 Seecs"}
          name={"Node 1"}
        />
        <Marker
          onClick={() => {
            onMarkerClick()
          }}
          position={{ lat: 33.644763963793125, lng: 72.98965536101481 }}
          title={"Node 2 Helipad Ground"}
          name={"Node 2"}
        />
        <Marker
          onClick={() => {
            onMarkerClick()
          }}
          position={{ lat: 33.64909888882513, lng: 72.99962808210702 }}
          title={"Node 3 Gate 1"}
          name={"Node 3"}
        />
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
