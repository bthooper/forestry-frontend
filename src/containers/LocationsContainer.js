import React from 'react';
import { connect } from 'react-redux';

import LocationForm from '../components/LocationForm.js';
import LocationsList from '../components/LocationsList.js';
import { fetchLocations } from '../actions/fetchLocations.js';

class LocationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLocations();
  }
  

  render() {

    return(
      <div>
        <LocationForm />
        <LocationsList locations={this.props.locations} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return(
    { locations: state.locations }
  )
}

export default connect(mapStateToProps, { fetchLocations })(LocationsContainer);
