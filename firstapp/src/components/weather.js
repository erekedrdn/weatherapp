import React from "react"
const Weather =(props)=>{
    return(
        <div>
            {props.city &&  
            <div>
            <p>Местоположение:{props.city},{props.country}</p>
            <p>Температура:{props.temp}, Макс:{props.temp_max},Мин:{props.temp_min}</p>
            <p>Ощущаеться как:{props.feelslike}</p>
            </div>
}
            <p>{props.error}</p>
        </div>
    )
}
export default Weather;