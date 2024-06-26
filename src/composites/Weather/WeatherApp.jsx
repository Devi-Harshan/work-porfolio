import "./styles.css";
import { useState } from "react";
const Weather = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appId=efb7215a00bd6c1f672d98e6a1c962cd`;
  const searchLocation = (event) => {
    fetch(url).then((res) => res.json().then((data) => setData(data)));
    setLocation("");
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter Location"
        />
        <button onClick={searchLocation}>Search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">{data.main && <h1>{data.main.temp}</h1>}</div>
          <div className="description">
            {data.weather && <p>{data.weather[0].main}</p>}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main && <p className="bold">{data.main.feels_like}</p>}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main && <p className="bold">{data.main.humidity}</p>}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind && <p className="bold">{data.wind.speed}</p>}

            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
