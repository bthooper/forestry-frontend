import React from 'react';
import { connect } from 'react-redux';

import { createLocation } from '../actions/createLocation.js';

class LocationForm extends React.Component {

  state = {
    name: '',
    description: '',
    longitude: '',
    latitude: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createLocation(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Location Name: </label>
          <input type="text" placeholder="Location Name" name="name"
            value={this.state.name} onChange={this.handleChange} /><br />
          <label>Description: </label>
          <input type="text" placeholder="Description"  name="description"
            value={this.state.description} onChange={this.handleChange} /><br />
          <label>Longitude: </label>
          <input type="text" placeholder="Longitude" name="longitude"
            value={this.state.longitude} onChange={this.handleChange} /><br />
          <label>Latitude: </label>
          <input type="text" placeholder="Latitude" name="latitude"
            value={this.state.latitude} onChange={this.handleChange} /><br />
          <input type="submit" value="Create Location" />
        </form>
      </div>
    )
  }
}

export default connect(null, {createLocation})(LocationForm);
