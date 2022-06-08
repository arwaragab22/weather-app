
import './App.css';
import WHEATHER from './weather';
import FORM from './form';
import  React,{ Component } from 'react';

class App extends Component {
  state = {
    tempreature: "",
    city:"",
    country: "",
    
    humidity: "",
    description:""
  };
  show = async (e, a, b) => {
    e.preventDefault();
    const response = await fetch(
      ` http://api.openweathermap.org/data/2.5/weather?q=${a}%2C${b}&appid=d6d0ff331257995b864b389cefc14fd7`
    );
    const data = await response.json();
    console.log(a, b);
   
    this.setState({
      tempreature: data.main.temp,
      city:data.name,
      country:data.sys.id,

      humidity:data.main.humidity,
      description: data.weather[0].description,
    });
    console.log(this.state.humidity)
  };
  render() {
    return (
      <div className="App">
        <FORM show={this.show} />
        <WHEATHER
          tempreature={this.state.tempreature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
