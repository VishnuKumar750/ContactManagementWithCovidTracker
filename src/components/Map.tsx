import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type countries = {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    lat: number;
    long: number;
  };
};

type Country = {
  countries: countries[];
};


const Map: React.FC<Country> = ({ countries }) => {
   
  return (
    <MapContainer
      center={[countries[0].countryInfo.lat, countries[0].countryInfo.long]}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
       >
      <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      {countries.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Cases: {country.cases}</p>
              <p>Deaths: {country.deaths}</p>
              <p>Recovered: {country.recovered}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
