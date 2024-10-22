import React from 'react';
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FaThermometerEmpty } from 'react-icons/fa';
import { FiWind } from 'react-icons/fi';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const TempAndDetails = ({ weather: { details, icon, temp, humidity, temp_min, temp_max, sunrise, sunset, feels_like, speed }, units }) => {
  const verticalDetails = [
    {
      id: 1,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
      Icon: FaThermometerEmpty
    },
    {
      id: 2,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
      Icon: BiSolidDropletHalf
    },
    {
      id: 3,
      title: "Wind",
      value: `${speed.toFixed()} ${units === 'metric' ? "km/h" : "m/s"}`,
      Icon: FiWind
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      title: "Sunrise",
      value: sunrise,
      Icon: GiSunrise
    },
    {
      id: 2,
      title: "Sunset",
      value: sunset,
      Icon: GiSunset
    },
    {
      id: 3,
      title: "High",
      value: `${temp_max.toFixed()}°`,
      Icon: MdKeyboardArrowUp
    },
    {
      id: 4,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
      Icon: MdKeyboardArrowDown
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-4 text-xl sm:text-xl text-cyan-300">
        {details}
      </div>

      <div className="flex sm:flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-16 sm:w-20" />

        <p className="text-5xl sm:text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-2 sm:space-y-3 my-2 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex font-light text-sm sm:text-sm items-center justify-center">
              <Icon size={16} className="mr-1" />
              {`${title}`}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-row items-center justify-center text-sm sm:text-sm py-3 space-x-4">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex items-center mx-2 sm:mx-4">
            <Icon size={24} sm:size={30} className="mr-2" />
            <p className="font-light">{title}:</p>
            <span className="font-medium ml-1">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
