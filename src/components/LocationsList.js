import React from 'react';

const LocationsList = (props) => {

  return(
    <div>
      <ul>
        {props.locations.map(location => 
          <li key={location.id}>{location.name} - {location.description}</li>
        )
        }
      
     
      </ul>
    </div>
  )

}

export default LocationsList;
