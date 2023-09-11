import React, {useState} from 'react';
// import './App.css';

const api = {
  key:"19ac2f27683fedab0e0e320af91f67f2",
  base:"https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
    }
  }

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", " April", "May", "June", "July", "August", "September", "October", "November", "December"]
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  // }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' 
      : 'app') : 'app'}>
    <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
      </div>  
      {(typeof weather.main != "undefined") ? (
     <div className="main-box">
      <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        {/* <div className="date">{dateBuilder(new Date())}</div> */}
      </div>
      <div className="weather-box">
        <div className="temp">
        {Math.round(weather.main.temp)}°C
      </div>
      <div className="weather">{weather.weather[0].main}</div>
      </div>
     </div>
      ) : ('')}
      </main> 
    </div>
  );
}

export default App;


// style={{ backgroundImage: `url("./photo/mountain.jpeg")` }}