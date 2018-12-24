import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state: {
    map: ''
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(this.props.url);
    window.initMap = this.initMap;
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: -17.506621, lng: -149.821926}
    });
    this.setState({map})
    this.initMarkers();
  }

  initMarkers = () => {
    this.props.venues.forEach((venue) => {
      const marker = new window.google.maps.Marker({
        position: {lat: venue.location.lat, lng: venue.location.lng},
        map: this.state.map,
        title: venue.name
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: venue.name
      })

      marker.addListener('click', function() {
        infoWindow.open(this.state.map, marker)
      }.bind(this))
    })
  }

  render() {
    return (
      <main>
        <div id="map">
        </div>
      </main>
    );
  }
}

function loadScript(url) {
  const noScript = window.document.getElementsByTagName('noscript')[0];
  const script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  noScript.insertAdjacentElement('beforebegin', script);
}

export default App;
