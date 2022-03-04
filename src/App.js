import React ,{useState} from "react";
import "./App.css";
// const api = {
//   key: "4691be7832f94e7f39f409ea38ef1230",
//   base: "https://api.openweathermap.org/data/2.5/",
// };
function App() {
  const [query, setQuery] = useState('');
  const [temp, setTemp] = useState({});
  const [data, setData] = useState([]);
  const [cityname, setCityname] = useState([]);
  const [country, setCountry] = useState([]);
  const [weather, setWeather] = useState([]);
 const search = evt =>{
   if(evt.key === "Enter"){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${'4691be7832f94e7f39f409ea38ef1230'}`)
     .then(res => res.json())
     .then(result => {setTemp(result);
    //  setQuery('');
     setData(temp.main.temp-273.5);
     setCityname(temp.name)
     setCountry(temp.sys.country)
     setWeather(weather[0])
    //  console.log(weather.name);
     });
   }
 }
  const dateBuilder = (d) => {
    let months = [
      "january",
      "Fabruary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${year}  ${month} `;
  };
  return (
    <div className="app_text">
      <div className="weatherApp">
        <input type="text" placeholder="Search..." className="search_tag" onChange={e =>setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
        <div className="location_box">
          <div className="location">{cityname}     {country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather_box">
          <div className="temp">{data}</div>
          <div className="weather">{weather}</div>
        </div>
    </div>
    </div>
  );
}

export default App;