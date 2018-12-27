import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import './SideBar.css';

class SideBar extends Component {
  state = {
    filterTerm: ''
  }

  //hide or show the sidebar, toggle the toggle button arrow, and remove sidebar buttons from tabindex when sidebar is collapsed
  toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const toggleArrow = document.getElementById('toggle-arrow');
    const listItems = document.getElementsByClassName('list-button');
    const searchButton = document.getElementById('search-button');
    const searchField = document.getElementById('search-field');
    const toggleButton = document.getElementById('toggle-button');

    sidebar.classList.toggle('active');
    if (toggleArrow.className === "arrow left") {
      toggleArrow.className = "arrow right";
      searchButton.tabIndex = -1;
      searchField.tabIndex = -1;
      toggleButton.setAttribute('aria-expanded', "false");
      [].forEach.call(listItems, (item) => item.tabIndex = -1);
    } else {
      toggleArrow.className = "arrow left";
      searchButton.tabIndex = 1;
      searchField.tabIndex = 1;
      toggleButton.setAttribute('aria-expanded', "true");
      [].forEach.call(listItems, (item) => item.tabIndex = 1);
    }
  }

  //when filter button is clicked set the filter term
  updateFilterTerm = (event) => {
    event.preventDefault();
    const filterTerm = document.getElementById('search-field').value;
    this.setState({filterTerm});
  }

  render() {
    let filterTerm = this.state.filterTerm;
    let filteredMarkersAndWindows;
    let leftoverMarkersAndWindows;

    //use regex to filter the list items and map markers based on the entered filter term
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
        <button id="toggle-button" onClick={this.toggleSidebar} tabIndex="1">
          <i id="toggle-arrow" className="arrow left"></i>
        </button>
        <form onSubmit={this.updateFilterTerm}>
          <label className="search-label" htmlFor="location-search">Filter Locations</label>
          <input id="search-field" type="search" name="query" aria-label="Filter map locations" tabIndex="1"/>
          <input id="search-button" type="submit" value="Filter" tabIndex="1"/>
        </form>
        {filteredMarkersAndWindows.map((object) => (
          <button className="list-button" key={object.marker.title} onClick={() => this.props.bounceMarkerAndOpenWindow(object.marker, object.infoWindow, this.props.map)} tabIndex="1">{object.marker.title}</button>
        ))}
      </div>
    )
  }
}

export default SideBar
