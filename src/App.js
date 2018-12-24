import React, { Component } from 'react';
import SideBar from './SideBar';
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
      zoom: 12,
      center: {lat: -17.519621, lng: -149.851926},
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.TOP_CENTER
      }
    });
    this.setState({map})
    this.initMarkers();
  }

  initMarkers = () => {
    this.props.venues.forEach((venue) => {
      const marker = new window.google.maps.Marker({
        position: {lat: venue.location.lat, lng: venue.location.lng},
        map: this.state.map,
        animation: window.google.maps.Animation.DROP,
        title: venue.name
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: `${venue.name}, ${venue.categories[0].name}`
      })

      marker.addListener('click', function() {
        infoWindow.open(this.state.map, marker);
        this.bounceMarker(marker);
      }.bind(this))
    })
  }

  bounceMarker = (marker) => {
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 500);
  }

  render() {
    return (
      <main>
        <div id="map">
        </div>
        <SideBar />
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
