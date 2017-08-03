import React, { Component } from 'react';

class GoogleMap extends Component {

  // Render Google map into our div reference
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map"></div>
  } 
}

export default GoogleMap;