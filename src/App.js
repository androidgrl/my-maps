import React, { Component } from 'react';
import './App.css';

class App extends Component {
  initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: -17.506621, lng: -149.821926}
    });
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

function loadScript(url) {
  const noScript = window.document.getElementsByTagName('noscript')[0];
  const script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
}
    <script async defer src="https://maps.googleapis.com/maps/api/js?v=3&key=%REACT_APP_APIKEY%&callback=initMap">
    </script>

export default App;
