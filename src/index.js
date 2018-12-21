import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const key = process.env.REACT_APP_APIKEY
ReactDOM.render(<App url={"https://maps.googleapis.com/maps/api/js?v=3&key=" + key + "&callback=initMap"} />, document.getElementById('root'));

serviceWorker.unregister();
