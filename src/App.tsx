import { useState } from "react";
import CitySearch from "./components/CitySearch";
import Weather from "./components/Weather";
import { getCall } from "./utils/axios";

function App() {
  // State to manage weather data and loading status.
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  // Function to handle city search and fetch weather data.
  const onCitySearch = (city: string) => {
    setLoading(true);
    getCall("/forecast.json", 7, city)
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div
      className="mx-auto p-4 h-screen flex justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgb(255 255 255 / 6%), rgb(166 198 255)), url(public/weather-bg.jpg)",
      }}
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full px-2">
          {/* Render the CitySearch component with the onCitySearch function. */}
          <CitySearch onCitySearch={onCitySearch} />
          {/* Render the Weather component with weather data and loading status. */}
          <Weather weather={weather} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
