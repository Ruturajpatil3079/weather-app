import React from 'react';
import './Forecast.css'

const Forecast = ({ title, data }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase text-md sm:text-base">{title}</p>
      </div>
      <hr className="my-1" />

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 py-4">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px]"
          >
            <p className="font-light text-sm sm:text-sm">{d.title}</p>
            <img
              src={d.icon}
              alt="weather icon"
              className="w-12 sm:w-12 my-1"
            />
            <p className="font-medium text-base sm:text-lg">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
