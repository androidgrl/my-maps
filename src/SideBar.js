import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('active');
  }

  render() {
    return(
      <div id="sidebar">
        <div className="toggle-button" onClick={this.toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <label htmlFor="location-search">Filter Locations</label>
          <input type="search" id="location-search" name="query" aria-label="Filter map locations"/>
        <button>Filter</button>
        <ul>
          {this.props.markers.map((marker) => (
            <li key={marker.title}>{marker.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SideBar
