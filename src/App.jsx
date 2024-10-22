import { FaReact } from "react-icons/fa";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [query, setQuery] = useState({ q: 'Pune' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching Weather data for ${cityName.toUpperCase()}`);

    await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
        setWeather(data);
      });
    console.log(data);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
        },
        (error) => {
          toast.error("Location permission denied. Showing Pune weather.");
          setQuery({ q: 'Pune' });
        }
      );
    } else {
      toast.error("Geolocation not supported. Showing Pune weather.");
      setQuery({ q: 'Pune' });
    }
  };

  useEffect(() => {
    handleLocationClick(); // Check for location when the component mounts
  }, []); // Only run once when the component mounts

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';

    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';

    return 'from-blue-500 to-orange-400';
  };

  return (
    <div className={`text-white mx-auto max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-full mt-4 mb-4 py-5 px-4 lg:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title="3 hours step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
