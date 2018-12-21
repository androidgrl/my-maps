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
    this.props.places.forEach((place) => {
      new window.google.maps.Marker({
        position: place.position,
        map: this.state.map,
        title: place.title
      })
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
