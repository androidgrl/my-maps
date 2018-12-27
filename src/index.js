import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorPage from './ErrorPage';
import * as serviceWorker from './serviceWorker';

const googleKey = process.env.REACT_APP_GOOGLEKEY;
const foursquareId = process.env.REACT_APP_FOURSQUARE_ID;
const foursquareSecret = process.env.REACT_APP_FOURSQUARE_SECRET;

fetch("https://api.foursquare.com/v2/venues/search?ll=-17.4887889,-149.9130473&v=20120610&client_id=" + foursquareId + "&client_secret=" + foursquareSecret)
  .then((response) => response.json())
  .then((json) => {
    const venues = json.response.venues.slice(0, 5);
    ReactDOM.render(<App url={"https://maps.googleapis.com/maps/api/js?v=3&key=" + googleKey + "&callback=initMap"} venues={venues} />, document.getElementById('root'));
  }).catch((error) => ReactDOM.render(<ErrorPage />, document.getElementById('root')));

serviceWorker.register();
