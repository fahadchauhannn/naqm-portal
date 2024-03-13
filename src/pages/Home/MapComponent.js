import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Gmap = () => {
  const markers = [
    { lat: 33.669283, lng: 73.116603, title: 'Oranges' },
    { lat: 33.672067, lng: 73.122839, title: 'Apples' },
    { lat: 33.668871, lng: 73.124903, title: 'Melon' },
    // Add more markers as needed
  ];

  return (
    <Map center={[33.670383, 73.123541]} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default Gmap;
