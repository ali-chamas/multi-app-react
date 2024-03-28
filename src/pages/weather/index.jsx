import React, { useEffect, useState } from "react";
import "./style.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import Loader from "./components/Loader";

const Weather = () => {
  const [search, setSearch] = useState("beirut");
  const [city, setCity] = useState("Beirut");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const getWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=0fe199c75d89411d85d153212231007&q=${city}&days=3&aqi=no&alerts=no`
      );
      const data = await res.json();
      console.log(data);
      if (data.error) {
        setError(true);
      } else {
        setResponse(data);
        setError(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setSearch("");
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <section className="flex center ">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-primary  border-radius flex  weather column ">
          <div className="flex column align-center small-gap  p country-container">
            <div className="flex small-gap align-center search-input">
              <input
                type="search"
                placeholder="Lebanon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="button" onClick={() => setCity(search)}>
                search
              </button>
            </div>
            {error
              ? "No countries found"
              : response.location && (
                  <>
                    <h1>{response.location.name}</h1>
                    <img src={response.current.condition.icon} alt="" />
                    <span className="temp-font flex">
                      27<p>°C</p>
                    </span>
                  </>
                )}
          </div>

          {error
            ? ""
            : response.location && (
                <div className="flex column big-gap align-center p info-container w-full">
                  <h1>{response.current.condition.text}</h1>
                  <div className="flex  align-center big-gap ">
                    <div className="flex align-center small-gap">
                      <h1>
                        <FaWind />
                      </h1>
                      <h1>{response.current.wind_degree} °</h1>
                    </div>
                    <div className="flex align-center small-gap">
                      <h1>
                        <WiHumidity />
                      </h1>
                      <h1>{response.current.humidity} %</h1>
                    </div>
                  </div>
                  <div className="flex big-gap align-center">
                    {response.forecast &&
                      response.forecast.forecastday.map((day, i) => (
                        <div
                          className="flex column small-gap align-center weather-cards"
                          key={i}
                        >
                          <img src={day.day.condition.icon} alt="" />
                          <p>{day.date}</p>
                          <h1 className=" flex">
                            {day.day.avgtemp_c} <p>°C</p>
                          </h1>
                          <small>{day.day.condition.text} </small>
                        </div>
                      ))}
                  </div>
                </div>
              )}
        </div>
      )}
    </section>
  );
};

export default Weather;
