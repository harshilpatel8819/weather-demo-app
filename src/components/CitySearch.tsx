import { useEffect, useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

// CitySearch component allows users to search for a city.
const CitySearch = ({
  onCitySearch,
}: {
  // Callback function called when the user searches for a city.
  onCitySearch: (city: string) => void;
}) => {
  // State to manage the input city value.
  const [city, setCity] = useState("Chicago");

  // Function to handle the city search.
  const handleCitySearch = () => {
    // Call the provided callback with the current city value.
    onCitySearch && onCitySearch(city);
    // Clear the input field after search.
    setCity("");
  };

  // Automatically trigger the search when the component mounts.
  useEffect(() => {
    handleCitySearch();
  }, []);

  return (
    <div className="mb-3 flex items-center">
      {/* Input field for entering the city name. */}
      <TextField
        onChange={(e) => setCity(e.target.value)}
        className="flex-1"
        value={city}
      />
      {/* Button to initiate the city search. */}
      <Button onClick={handleCitySearch}>Search</Button>
    </div>
  );
};

export default CitySearch;
