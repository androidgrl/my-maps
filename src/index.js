import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const key = process.env.REACT_APP_APIKEY
const places = [
  {
    position: {
      lat: -17.4887889, lng: -149.9130473
    }, title: 'Coco Beach Restaurant'
  },
  {
    position: {
      lat: -17.501757, lng: -149.8509206
    }, title: 'Tropical Garden Restaurant'
  },
  {
    position: {
      lat: -17.4873481, lng: -149.8459982
    }, title: 'Lilikoi Garden Cafe'
  },
  {
    position: {
      lat: -17.4990726, lng: -149.9138653
    }, title: 'Restaurant Le Mayflower'
  },
  {
    position: {
      lat: -17.4916361, lng: -149.8828992
    }, title: 'Snack Mahana'
  }
]

ReactDOM.render(<App url={"https://maps.googleapis.com/maps/api/js?v=3&key=" + key + "&callback=initMap"} places={places} />, document.getElementById('root'));

serviceWorker.unregister();
