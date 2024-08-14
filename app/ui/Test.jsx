"use client";
import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  TrafficLayer,
} from "@react-google-maps/api";
import { useForm } from "react-hook-form";

const Test = () => {
  const { register, handleSubmit } = useForm();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showTraffic, setShowTraffic] = useState(false);

  const mapStyles = {
    height: "80vh",
    width: "100%",
  };

  const onSubmit = (data) => {
    if (typeof window !== "undefined") {
      const { origin, destination } = data;

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            setShowTraffic(true);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("origin")}
          placeholder="Current Location"
          required
        />
        <input
          {...register("destination")}
          placeholder="Destination"
          required
        />
        <button type="submit">Get Directions</button>
      </form>

      <LoadScript googleMapsApiKey="AIzaSyDJ_svD6mSoWxMdmEIFIyyppaDU_kdT7To">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={{ lat: 40.712776, lng: -74.005974 }} // Default center (New York City)
        >
          {directionsResponse && (
            <>
              <DirectionsRenderer directions={directionsResponse} />
              {showTraffic && <TrafficLayer />}
            </>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Test;
