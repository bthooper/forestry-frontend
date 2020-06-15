

export const createLocation = (data) => {
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/locations',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'applicaiton/json'
        },
        method: 'POST',
        body: JSON.stringify(data) 
      })
      .then(resp => resp.json())
      .then(location => dispatch({
        type: "ADD_LOCATION",
        payload: location
      }))
  }

}
