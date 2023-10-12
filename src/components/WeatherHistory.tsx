const WeatherHistory = ({ weatherForecast }: any) => {
  // Array to map the numeric day of the week to its abbreviation.
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="px-6 py-6 relative">
      <div
        className="text-center justify-between items-center flex"
        style={{ flexFlow: "initial" }}
      >
        {weatherForecast?.map((forecast: any, index: number) => {
          // Convert the date string into a JavaScript Date object.
          const date = new Date(forecast.date);

          return (
            <div
              className="text-center mb-0 flex items-center justify-center flex-col"
              key={index}
            >
              {/* Display the abbreviated day of the week. */}
              <span className="block my-1">{weekDays[date.getUTCDay()]}</span>
              {/* Display the weather condition icon. */}
              <img
                src={`http:${forecast.day.condition.icon}`}
                className="block w-8 h-8"
              />
              {/* Display the average temperature in degrees Celsius. */}
              <span className="block my-1 text-[#ffb501]">
                {forecast.day.avgtemp_c}&deg;C
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherHistory;
