"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const Map = () => {
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const [trafficMessage, setTrafficMessage] = useState("");

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d8481af6f4be3d1718ab34bc51472cf&units=metric`
      );
      setWeather(response.data);
      generateTrafficMessage(response.data.main.temp);
      console.log(response.data);
      console.log("Here is the weather state", weather);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const mapStyles = {
    height: "70vh",
    width: "80%",
  };

  const defaultCenter = weather
    ? { lat: weather.coord.lat, lng: weather.coord.lon }
    : { lat: 23.8103, lng: 90.4125 }; // Default to Dhaka if weather data isn't available

  const generateTrafficMessage = (temp) => {
    if (temp < 10) {
      setTrafficMessage(
        "Traffic might be lighter due to cold weather. Stay warm!"
      );
    } else if (temp >= 10 && temp < 25) {
      setTrafficMessage(
        "Moderate temperature, expect normal traffic conditions."
      );
    } else if (temp >= 25 && temp < 35) {
      setTrafficMessage(
        "It's getting warm! Traffic might increase as people head out."
      );
    } else {
      setTrafficMessage(
        "Hot weather ahead! Traffic could be heavy, especially in the afternoon."
      );
    }
  };

  return (
    <div className="font-mono bg-black py-10">
      <form onSubmit={handleSearch} className="flex justify-center">
        <input
          className="p-1 rounded-md w-[100vh]"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="search"
          placeholder="Search Location..."
        />
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <button type="submit">
            <IoSearch size={28} />
          </button>
        </div>
      </form>

      <div className="flex justify-center p-10  ">
        <LoadScript googleMapsApiKey="AIzaSyDJ_svD6mSoWxMdmEIFIyyppaDU_kdT7To">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
        <div className="bg-[#70ABBB] shadow-md w-[60vh] ">
          {weather && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "36px",
                  color: "white",
                  fontSize: "22px",
                }}
              >
                <p>{weather.sys.country},</p>
                <p>{weather.name}</p>
              </div>
              <div className="text-center py-4 text-white  ">
                <h1 className="text-[6vh]">{weather.main.temp}°C</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FaCloud size={150} color="skyblue" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <WiHumidity size={26} color="white" />
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {weather.main.humidity}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <FiWind size={26} color="white" />
                  <p
                    style={{
                      marginLeft: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {weather.wind.speed}
                    <br />
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "12px",
                  color: "white",
                }}
              >
                <b>Condition : </b>{" "}
                <p style={{ marginLeft: "6px" }}>{weather.weather[0].main}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                  color: "yellow",
                  fontWeight: "bold",
                }}
              >
                {trafficMessage}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="py-10"></div>
    </div>
  );
};

export default Map;