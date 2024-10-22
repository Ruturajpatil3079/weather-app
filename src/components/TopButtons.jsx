const TopButtons = ({ setQuery }) => {
    const cities = [
      { id: 1, name: 'Kolhapur' },
      { id: 2, name: 'Pune' },
      { id: 3, name: 'Mumbai' },
      { id: 4, name: 'Bengaluru' },
      { id: 5, name: 'Noida' },
    ];
  
    return (
      <div className="flex flex-wrap justify-center sm:justify-around my-4">
        {cities.map((city) => (
          <button
            key={city.id}
            onClick={() => setQuery({ q: city.name })}
            className="text-md sm:text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in m-1"
          >
            {city.name}
          </button>
        ))}
      </div>
    );
  };
  
  export default TopButtons;
  