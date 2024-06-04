import Info from './components/Info';
import './App.css';
import Weather from './components/weather';
import Form from './components/form';
import React from "react"

const apiKey = "1aafb4a720c316f38076a0154d331b80"

class App extends React.Component {
  state = {
    temp: undefined,
    city :undefined,
    country: undefined,
    feelslike: undefined,
    weatherData: null,
    temp_min: undefined,
    temp_max: undefined,
    error: undefined
    
  }

  gettingWeather = async (city) => {
    if(city){
    const apiUrl = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await apiUrl.json();
    this.setState({ weatherData: data, 
      temp: data.main.temp,
      city: data.name,
      country : data.sys.country,
      feelslike: data.main.feels_like,
      temp_min : data.main.temp_min,
      temp_max :data.main.temp_max,
      error: undefined
    });

 
  }
  else{
    this.setState({
    temp: undefined,
    city :undefined,
    country: undefined,
    feelslike: undefined,
    weatherData: null,
    temp_min: undefined,
    temp_max: undefined,
    error: "Введите название города"
    })
  }
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
        <div className='row'>
        <div className='col-sm-5 info'>
        <Info />
        </div>
        <div className='col-sm-7 form'>
        <Form weatherMethod={this.gettingWeather} />
        <Weather weatherData={this.state.weatherData}
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        feelslike={this.state.feelslike}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        error={this.state.error}
        />
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;