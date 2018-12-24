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
        <span class="bar-header">Featured Locations</span>
        <ul>
          <li>Hi</li>
          <li>Bye</li>
        </ul>
      </div>
    )
  }
}

export default SideBar
