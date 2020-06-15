import React from 'react';
import { connect } from 'react-redux';

import { fetchLocations } from './actions/fetchLocations';
import LocationsContainer from './containers/LocationsContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return(
      <div className="App">
        <LocationsContainer />
      </div>
    );
  }

}

// const mapStateToProps = (state) => {
//   return {
//   locations: state.locations
//   }
// }

export default connect(null, {fetchLocations})(App);
