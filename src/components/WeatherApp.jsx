// import sunny from "../assets/images/sunny.png"
// import cloudy from "../assets/images/cloudy.png"
// import rainy from "../assets/images/rainy.png"
// import snowy from "../assets/images/snowy.png"

// import { useState ,useEffect} from "react"

 



// const WeatherApp = () => {
//     const[data,setData]=useState({})
//     const[location,setLocation]=useState("")
    
//     const api_key=import.meta.env.VITE_API_KEY;
    


//     useEffect(()=>{
//         const fetchDefaultWeather= async () => {
          
//             const defaultLocation="Jaipur"
//             const url=`https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
//         const res= await fetch(url)
//         const defaultData = await res.json()
//         setData(defaultData)
        
//     }
//     fetchDefaultWeather()
//     }, [])
    

//     const handleInputChange=(e)=>{
//         setLocation(e.target.value)
//     }

//     const search=async ()=> {
// if(location.trim()!==""){
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
//     const res = await fetch(url)
//     const searchData = await res.json()
//     console.log(searchData)
// setData(searchData)
// setLocation('')

// }}

// //         const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
// //     const res = await fetch(url)
// //     const searchData = await res.json()
// //     console.log(searchData)
// // setData(searchData)
// // setLocation('') 

// const handleKeyDown = (e) => {
//     if(e.key==="Enter"){
//         search()
//     }
// }

//     const weatherImages={
//         Clear: sunny,
//         Clouds: cloudy,
//         Snow:snowy,
//         Rain: rainy,
//         Haze: cloudy,
//         Mist: cloudy,
//     }
//     const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null
     
//     const backgroundImages={
//         Clear: "linear-gradient(to right,#f3b07c, #fcd283)",
//         Clouds: "linear-gradient(to right,#57d6d4, #71eeec)",
//         Snow:"linear-gradient(to right,#aff2ff, #fff);",
//         Rain: "linear-gradient(to right,#5bc8fb, #80eaff)",
//         Haze: "linear-gradient(to right,#57d6d4, #71eeec)",
//         Mist: "linear-gradient(to right,#57d6d4, #71eeec)",
//     }

//     const backgroundImage= data.weather ? backgroundImages[data.weather[0].main] : "linear-gradient(to right,#f3b07c, #fcd283)"
// const currentDate = new Date()
// const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
// const month = currentDate.toLocaleString("default", { month: "long" });
// const date = currentDate.getDate();
// const formattedDate= `${dayOfWeek}, ${date} ,${month}`



//   return (
//     <div className="container" style={{backgroundImage}}>
//         <div className="weather-app" style={{backgroundImage: backgroundImage && backgroundImage.replace? backgroundImage.replace("to right", "to top"): null,}}>
//             <div className="search">
//                 <div className="search-top">
//                     <i className="fa-solid fa-location-dot"></i>
//                     <div className="location">{data.name}</div>
//                 </div>

//                 <div className="search-bar">
               
//                     <input type="text"
//                     placeholder= "Enter Location"
//                     value={location}
//                     onChange={handleInputChange}
//                     onKeyDown={handleKeyDown} />
//                     <i className="fa-solid fa-magnifying-glass" onClick={search}></i>

                     
//                 </div>
//             </div>
//             <div className="weather">
//             <img src={weatherImage} alt="sunny"></img> 
//             <div className="weather-type">{data.weather ? data.weather[0].main:null} </div>
//             </div>
//             <div className="temp"> {data.main ? `${Math.floor(data.main.temp)}°` : null} </div>
//             <div className="weather-date">
//                 <p> {formattedDate}</p>
//             </div>
//             <div className="weather-data">
//                 <div className="humidity">
//                     <div className="data-name">Humidity</div>
//                     <i className="fa-solid fa-droplet"></i>
//                     <div className="data">{data.main ? data.main.humidity :null}%</div>

//                 </div>
//                 <div className="wind">
//                     <div className="data-name">Wind</div>
//                     <i className="fa-solid fa-wind"></i>
//                     <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default WeatherApp;


// import { useState, useEffect } from "react";

// const WeatherApp = () => {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("");
//   const [forecastData, setForecastData] = useState([]);
//   const api_key = import.meta.env.VITE_API_KEY;

//   useEffect(() => {
//     const fetchDefaultWeather = async () => {
//       const defaultLocation = "Jaipur";
//       const url = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultLocation}&units=metric&appid=${api_key}`;
//       const res = await fetch(url);
//       const defaultData = await res.json();
//       setData(defaultData.list[0]); // First forecast data
//       setForecastData(defaultData.list); // All hourly forecasts
//     };
//     fetchDefaultWeather();
//   }, []);

//   const handleInputChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const search = async () => {
//     if (location.trim() !== "") {
//       const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${api_key}`;
//       const res = await fetch(url);
//       const searchData = await res.json();
//       setData(searchData.list[0]); // Set first forecast
//       setForecastData(searchData.list); // Set all hourly forecasts
//       setLocation("");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       search();
//     }
//   };

//   const weatherImages = {
//     Clear: sunny,
//     Clouds: cloudy,
//     Snow: snowy,
//     Rain: rainy,
//     Haze: cloudy,
//     Mist: cloudy,
//   };
//   const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;

//   const backgroundImages = {
//     Clear: "linear-gradient(to right,#f3b07c, #fcd283)",
//     Clouds: "linear-gradient(to right,#57d6d4, #71eeec)",
//     Snow: "linear-gradient(to right,#aff2ff, #fff);",
//     Rain: "linear-gradient(to right,#5bc8fb, #80eaff)",
//     Haze: "linear-gradient(to right,#57d6d4, #71eeec)",
//     Mist: "linear-gradient(to right,#57d6d4, #71eeec)",
//   };

//   const backgroundImage = data.weather
//     ? backgroundImages[data.weather[0].main]
//     : "linear-gradient(to right,#f3b07c, #fcd283)";
//   const currentDate = new Date();
//   const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
//   const month = currentDate.toLocaleString("default", { month: "long" });
//   const date = currentDate.getDate();
//   const formattedDate = `${dayOfWeek}, ${date} ,${month}`;

  
//     return (
//         <div className="main">
       
//             <div
//               className="weather-app"
//               style={{
//                 backgroundImage:
//                   backgroundImage && backgroundImage.replace
//                     ? backgroundImage.replace("to right", "to top")
//                     : null,
//               }}
//             >
//               {/* Current Weather Section */}
//               <div className="current-weather">
//                 <div className="search">
//                   <div className="search-top">
//                     <i className="fa-solid fa-location-dot"></i>
//                     <div className="location">{data.name}</div>
//                   </div>
//                   <div className="search-bar">
//                     <input
//                       type="text"
//                       placeholder="Enter Location"
//                       value={location}
//                       onChange={handleInputChange}
//                       onKeyDown={handleKeyDown}
//                     />
//                     <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
//                   </div>
//                 </div>
      
//                 <div className="weather">
//                   <img src={weatherImage} alt="weather-icon" />
//                   <div className="weather-type">
//                     {data.weather ? data.weather[0].main : null}
//                   </div>
//                 </div>
//                 <div className="temp">
//                   {data.main ? `${Math.floor(data.main.temp)}°` : null}
//                 </div>
//                 <div className="weather-date">
//                   <p>{formattedDate}</p>
//                 </div>
//                 <div className="weather-data">
//                   <div className="humidity">
//                     <div className="data-name">Humidity</div>
//                     <i className="fa-solid fa-droplet"></i>
//                     <div className="data">{data.main ? data.main.humidity : null}%</div>
//                   </div>
//                   <div className="wind">
//                     <div className="data-name">Wind</div>
//                     <i className="fa-solid fa-wind"></i>
//                     <div className="data">
//                       {data.wind ? data.wind.speed : null} km/h
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               </div>
      
//               {/* Hourly Forecast Section */}
//               <div className="hourly-forecast" style={{
//                 backgroundImage:
//                   backgroundImage && backgroundImage.replace
//                     ? backgroundImage.replace("to right", "to top")
//                     : null,
//               }}>
//                 <h2>Hourly Forecast</h2>

//                 <div className="forecast-grid">
//                   {forecastData.slice(0, 8).map((hour, index) => (
//                     <div key={index} className="forecast-item">
//                       <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
//                       <p>{hour.weather[0].description}</p>
//                       <p>{Math.round(hour.main.temp)}°C</p>
//                     </div>
//                   ))}
//                 </div></div>
             
//                 </div>
          
       
//       );
      

// };

// export default WeatherApp;


// import sunny from "../assets/images/sunny.png";
// import cloudy from "../assets/images/cloudy.png";
// import rainy from "../assets/images/rainy.png";
// import snowy from "../assets/images/snowy.png";
// import { useState, useEffect } from "react";

// const WeatherApp = () => {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("");
//   const [forecastData, setForecastData] = useState([]);
//   const api_key = import.meta.env.VITE_API_KEY;

//   useEffect(() => {
//     const fetchDefaultWeather = async () => {
//       const defaultLocation = "Jaipur";
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=metric&appid=${api_key}`;
//       const res = await fetch(url);
//       const defaultData = await res.json();
//       setData(defaultData);

//       // Fetch hourly forecast data
//       const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultLocation}&units=metric&appid=${api_key}`;
//       const forecastRes = await fetch(forecastUrl);
//       const forecastData = await forecastRes.json();
//       setForecastData(forecastData.list);
//     };
//     fetchDefaultWeather();
//   }, []);

//   const handleInputChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const search = async () => {
//     if (location.trim() !== "") {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
//       const res = await fetch(url);
//       const searchData = await res.json();
//       setData(searchData);
//       setLocation("");

//       // Fetch hourly forecast data
//       const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${api_key}`;
//       const forecastRes = await fetch(forecastUrl);
//       const forecastData = await forecastRes.json();
//       setForecastData(forecastData.list);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       search();
//     }
//   };

//   const weatherImages = {
//     Clear: sunny,
//     Clouds: cloudy,
//     Snow: snowy,
//     Rain: rainy,
//     Haze: cloudy,
//     Mist: cloudy,
//   };

//   const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;

//   const backgroundImages = {
//     Clear: "linear-gradient(to right,#f3b07c, #fcd283)",
//     Clouds: "linear-gradient(to right,#57d6d4, #71eeec)",
//     Snow: "linear-gradient(to right,#aff2ff, #fff)",
//     Rain: "linear-gradient(to right,#5bc8fb, #80eaff)",
//     Haze: "linear-gradient(to right,#57d6d4, #71eeec)",
//     Mist: "linear-gradient(to right,#57d6d4, #71eeec)",
//   };

//   const backgroundImage =
//     data.weather && data.weather[0] ? backgroundImages[data.weather[0].main] : "linear-gradient(to right,#f3b07c, #fcd283)";

//   const currentDate = new Date();
//   const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
//   const month = currentDate.toLocaleString("default", { month: "long" });
//   const date = currentDate.getDate();
//   const formattedDate = `${dayOfWeek}, ${date} ,${month}`;

//   return (
//     <div className="main-container">
//       {/* Weather App */}
//       <div className="weather-app" style={{ backgroundImage }}>
//         <div className="search">
//           <div className="search-top">
//             <i className="fa-solid fa-location-dot"></i>
//             <div className="location">{data.name}</div>
//           </div>

//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Enter Location"
//               value={location}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown}
//             />
//             <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
//           </div>
//         </div>

//         <div className="weather">
//           <img src={weatherImage} alt="sunny" />
//           <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
//         </div>
//         <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
//         <div className="weather-date">
//           <p>{formattedDate}</p>
//         </div>
//         <div className="weather-data">
//           <div className="humidity">
//             <div className="data-name">Humidity</div>
//             <i className="fa-solid fa-droplet"></i>
//             <div className="data">{data.main ? data.main.humidity : null}%</div>
//           </div>
//           <div className="wind">
//             <div className="data-name">Wind</div>
//             <i className="fa-solid fa-wind"></i>
//             <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
//           </div>
//         </div>
//       </div>
//          {/* 4-Day Forecast */}
//          <div className="four-day-forecast">
//         <h2>4-Day Forecast</h2>

//         <div className="forecast-grid">
//           {dailyForecastData.map((day, index) => (
//             <div key={index} className="forecast-item">
//               <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
//               <p>{day.weather[0].description}</p>
//               <p>{Math.round(day.main.temp)}°C</p>
//             </div>
//           ))}
//         </div>
//       </div>


//       {/* Hourly Forecast */}
//       <div className="hourly-forecast" style={{ backgroundImage: backgroundImage.replace("to right", "to top") }}>
//         <p className="h2">Hourly Forecast</p>

//         <div className="forecast-grid">
//           {forecastData.slice(0, 8).map((hour, index) => (
//             <div key={index} className="forecast-item">
//               <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
//               <p>{hour.weather[0].description}</p>
//               <p>{Math.round(hour.main.temp)}°C</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;


import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import { useState, useEffect } from "react";

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [dailyForecastData, setDailyForecastData] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      const defaultLocation = "Jaipur";
      // Fetch current weather data
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=metric&appid=${api_key}`;
      const res = await fetch(weatherUrl);
      const weatherData = await res.json();
      setData(weatherData);

      // Fetch 5-day forecast data
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultLocation}&units=metric&appid=${api_key}`;
      const forecastRes = await fetch(forecastUrl);
      const forecastData = await forecastRes.json();
      setForecastData(forecastData.list);

      // Extract daily forecast data (first 4 days)
      const dailyData = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 4); // Every 8th entry is a new day
      setDailyForecastData(dailyData);
    };

    fetchWeatherData();
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const search = async () => {
    if (location.trim() !== "") {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
      const res = await fetch(weatherUrl);
      const searchData = await res.json();
      setData(searchData);
      setLocation("");

      // Fetch 5-day forecast data
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${api_key}`;
      const forecastRes = await fetch(forecastUrl);
      const forecastData = await forecastRes.json();
      setForecastData(forecastData.list);

      // Extract daily forecast data
      const dailyData = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 4);
      setDailyForecastData(dailyData);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Snow: snowy,
    Rain: rainy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;

  const backgroundImages = {
    Clear: "linear-gradient(to right,#f3b07c, #fcd283)",
    Clouds: "linear-gradient(to right,#57d6d4, #71eeec)",
    Snow: "linear-gradient(to right,#aff2ff, #fff)",
    Rain: "linear-gradient(to right,#5bc8fb, #80eaff)",
    Haze: "linear-gradient(to right,#57d6d4, #71eeec)",
    Mist: "linear-gradient(to right,#57d6d4, #71eeec)",
  };

  const backgroundImage =
    data.weather && data.weather[0] ? backgroundImages[data.weather[0].main] : "linear-gradient(to right,#f3b07c, #fcd283)";

  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = currentDate.getDate();
  const formattedDate = `${dayOfWeek}, ${date} ,${month}`;

  return (
    <div className="main-container" style={{backgroundImage}}>
      {/* Weather App */}
      <div className="weather-app" style={{ backgroundImage }}>
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{data.name}</div>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>

        <div className="weather">
          <img src={weatherImage} alt="sunny" />
          <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
        </div>
        <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
        <div className="weather-date">
          <p>{formattedDate}</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
          </div>
        </div>
      </div>

      {/* 4-Day Forecast */}
      <div className="four-day-forecast" style={{ backgroundImage: backgroundImage.replace("to right", "to top") }}>
      <p className="h2">4-Day Forecast</p>

        <div className="forecast-grid0">
          {dailyForecastData.map((day, index) => (
            <div key={index} className="forecast-item0">
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>{day.weather[0].description}</p>
              <p>{Math.round(day.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="hourly-forecast" style={{ backgroundImage: backgroundImage.replace("to right", "to top") }}>
        <p className="h2">Hourly Forecast</p>

        <div className="forecast-grid">
          {forecastData.slice(0, 8).map((hour, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
              <p>{hour.weather[0].description}</p>
              <p>{Math.round(hour.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
