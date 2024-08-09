"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDJ_svD6mSoWxMdmEIFIyyppaDU_kdT7To">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
