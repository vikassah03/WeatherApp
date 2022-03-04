// import React from "react";
// import "./app_text.css";
// function App_text() {
//   // const [city, setCity] = useState();
//   // const [search, setSearch] = useState("Bihar");
//   const api = {
//     key: "4691be7832f94e7f39f409ea38ef1230",
//     base: "https://api.openweathermap.org/data/2.5/",
//   };

//   const dateBuilder = (d) => {
//     let months = [
//       "january",
//       "Fabruary",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     let days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullyear();
//     return `${day} ${date} ${month} ${year}`;
//   };
//   return (
//     <div className="app_text">
//       <div className="weatherApp">
//         <input type="text" placeholder="Search..." className="search_tag" />
//         <div className="location_box">
        
//           <div className="location">new delhi city, india</div>
//           {/* <div className="date">{dateBuilder(new Date())}</div> */}
//         </div>
//         <div className="weather_box">
//           <div className="temp">24.C</div>
//           <div className="weather">Sunny</div>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default App_text;
// // key:afc91223c51718747ae4465e6ae671d7
// // api.openweathermap.org/data/2.5/weather?q={city name}afc91223c51718747ae4465e6ae671d7
