import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const googleKey = process.env.REACT_APP_GOOGLEKEY
const venueIds = [
  '4e552fa722710ebb5a93c821',
  '52169fdf11d2695f4e14db6c',
  '502d75d9e4b06ef10ce7a87a',
  '578989a7cd109da29e2f9102',
  '5b594e42175562002cf2b547'
]

const requests = venueIds.map((id) => {
  return fetch("https://api.foursquare.com/v2/venues/" + id + "?v=20120610&client_id=" + process.env.REACT_APP_FOURSQUARE_ID + "&client_secret=" + process.env.REACT_APP_FOURSQUARE_SECRET).then((res) => res.json())
})

Promise.all(requests).then((responses) => {
  const venues = responses.map((res) => res.response.venue);
  ReactDOM.render(<App url={"https://maps.googleapis.com/maps/api/js?v=3&key=" + googleKey + "&callback=initMap"} venues={venues} />, document.getElementById('root'));
})


serviceWorker.unregister();
