import React from 'react';

import Titles from "./componenets/Titles";
import Form from "./componenets/Form";
import Weather from "./componenets/Weather";

// api key voor https://openweathermap.org/api
// het is in een const want dan kan je het in de link doen beneden met city en country
const API_KEY ="a55aeeb25ed42f447a9fe8500fc2ef52";

// State is undefined eerst
class App extends React.Component {
    state = {
      temperature: undefined, 
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
  }
    getWeather = async (e) => {
    e.preventDefault();
//const voor city en country, dan kan je het in de link invoeren
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

// api call, haalt data op van de api
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
//if city en country is ingevoerd: pak data
    if(city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
// als je niks invoert, krijg je een error
    } else {
      console.log(data);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Voer uw locatie in aub"
      })
    }
  }
// render van de components, bootstrap 3.3.7 gebruikt
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <div className="inputfield">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
