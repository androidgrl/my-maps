import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import './SideBar.css';

class SideBar extends Component {
  state = {
    filterTerm: ''
  }

  toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('active');
  }

  updateFilterTerm = (event) => {
    event.preventDefault();
    const filterTerm = document.getElementById('search-field').value;
    this.setState({filterTerm});
  }

  render() {
    let filterTerm = this.state.filterTerm;
    let filteredMarkersAndWindows;
    let leftoverMarkersAndWindows;

    if (filterTerm) {
      const match = new RegExp(escapeRegExp(filterTerm), 'i');
      filteredMarkersAndWindows = this.props.markersAndWindows.filter((object) => match.test(object.marker.title));
      leftoverMarkersAndWindows = this.props.markersAndWindows.filter((object) => !match.test(object.marker.title));
      leftoverMarkersAndWindows.forEach((object) => {
        object.marker.setVisible(false);
        object.infoWindow.close();
      })
    } else {
      filteredMarkersAndWindows = this.props.markersAndWindows;
      filteredMarkersAndWindows.forEach((object) => {
        object.marker.setVisible(true);
      })
    }

    return(
      <div id="sidebar">
        <div className="toggle-button" onClick={this.toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <form onSubmit={this.updateFilterTerm}>
          <label className="search-label" htmlFor="location-search">Filter Locations</label>
          <input type="search" id="search-field" name="query" aria-label="Filter map locations"/>
          <input className="search-button" type="submit" value="Filter"/>
        </form>
        <ul>
          {filteredMarkersAndWindows.map((object) => (
            <li key={object.marker.title} onClick={() => this.props.bounceMarkerAndOpenWindow(object.marker, object.infoWindow, this.props.map)}>{object.marker.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SideBar
