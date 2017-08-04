import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    // Some city variables
    const id = cityData.city.id;
    const temperatures = _.map(cityData.list.map(weather => weather.main.temp ), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure );
    const humidities = cityData.list.map(weather => weather.main.humidity );
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart color="red" data={temperatures} units="º C" /></td>
        <td><Chart color="green" data={pressures} units="hPa" /></td>
        <td><Chart color="black" data={humidities} units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
              <th>City</th>
              <th>Temperature (º C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
