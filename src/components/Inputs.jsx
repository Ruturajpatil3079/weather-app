import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
        setCity('')
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center my-6">
      <div className="flex flex-col sm:flex-row w-full sm:w-3/4 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          className="text-gray-500 text-lg sm:text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
          type="text"
          placeholder="Search by city..."
        />

        {/* <BiSearch
          size={25}
          onClick={handleSearchClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        /> */}
        <button type="button"
        onClick={handleSearchClick} 
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Search</button>
        <BiCurrentLocation
          onClick={handleLocationClick}
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-full sm:w-1/4 items-center justify-center mt-4 sm:mt-0">
        <button
          className="text-lg sm:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>

        <p className="text-lg sm:text-2xl font-medium mx-1">|</p>
        <button
          className="text-lg sm:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
