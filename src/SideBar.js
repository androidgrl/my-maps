import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  render() {
    return(
      <div id="sidebar">
        <div class="toggle-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <label for="location-search">Filter Locations</label>
          <input type="search" id="location-search" name="query" aria-label="Filter map locations"/>
        <button>Filter</button>
        <ul>
          <li>Hi</li>
          <li>Bye</li>
        </ul>
      </div>
    )
  }
}

export default SideBar
