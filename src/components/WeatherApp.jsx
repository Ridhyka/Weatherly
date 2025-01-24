import sunny from "../assets/images/sunny.png"
import cloudy from "../assets/images/cloudy.png"
import rainy from "../assets/images/rainy.png"
import snowy from "../assets/images/snowy.png"

import { useState ,useEffect} from "react"

 



const WeatherApp = () => {
    const[data,setData]=useState({})
    const[location,setLocation]=useState({})
    
    const api_key="c7beca885420f951dafcbcc3b342e4e5"
    const placeholder = "Enter Location"


    useEffect(()=>{
        const fetchDefaultWeather= async () => {
          
            const defaultLocation="Jaipur"
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
        const res= await fetch(url)
        const defaultData = await res.json()
        setData(defaultData)
        
    }
    fetchDefaultWeather()
    }, [])
    

    const handleInputChange=(e)=>{
        setLocation(e.target.value)
    }

    const search=async ()=> {
if(location.trim()!==""){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
    const res = await fetch(url)
    const searchData = await res.json()
    console.log(searchData)
setData(searchData)
setLocation('')

}}

//         const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
//     const res = await fetch(url)
//     const searchData = await res.json()
//     console.log(searchData)
// setData(searchData)
// setLocation('') 

const handleKeyDown = (e) => {
    if(e.key==="Enter"){
        search()
    }
}

    const weatherImages={
        Clear: sunny,
        Clouds: cloudy,
        Snow:snowy,
        Rain: rainy,
        Haze: cloudy,
        Mist: cloudy,
    }
    const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null
     
    const backgroundImages={
        Clear: "linear-gradient(to right,#f3b07c, #fcd283)",
        Clouds: "linear-gradient(to right,#57d6d4, #71eeec)",
        Snow:"linear-gradient(to right,#aff2ff, #fff);",
        Rain: "linear-gradient(to right,#5bc8fb, #80eaff)",
        Haze: "linear-gradient(to right,#57d6d4, #71eeec)",
        Mist: "linear-gradient(to right,#57d6d4, #71eeec)",
    }

    const backgroundImage= data.weather ? backgroundImages[data.weather[0].main] : "linear-gradient(to right,#f3b07c, #fcd283)"
const currentDate = new Date()
const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
const month = currentDate.toLocaleString("default", { month: "long" });
const date = currentDate.getDate();
const formattedDate= `${dayOfWeek}, ${date} ,${month}`



  return (
    <div className="container" style={{backgroundImage}}>
        <div className="weather-app" style={{backgroundImage: backgroundImage && backgroundImage.replace? backgroundImage.replace("to right", "to top"): null,}}>
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>

                <div className="search-bar">
               
                    <input type="text"
                    placeholder= {placeholder}
                    value={location}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} />
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>

                     
                </div>
            </div>
            <div className="weather">
            <img src={weatherImage} alt="sunny"></img> 
            <div className="weather-type">{data.weather ? data.weather[0].main:null} </div>
            </div>
            <div className="temp"> {data.main ? `${Math.floor(data.main.temp)}°` : null} </div>
            <div className="weather-date">
                <p> {formattedDate}</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                    <div className="data-name">Humidity</div>
                    <i className="fa-solid fa-droplet"></i>
                    <div className="data">{data.main ? data.main.humidity :null}%</div>

                </div>
                <div className="wind">
                    <div className="data-name">Wind</div>
                    <i className="fa-solid fa-wind"></i>
                    <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WeatherApp;
