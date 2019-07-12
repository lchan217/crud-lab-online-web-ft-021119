import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants List
        {this.props.restaurants.map((restaurant,idx) =>
          <li key={idx}>{restaurant.text}</li>
          )}
      </ul>
    );
  }
};
``
export default Restaurants;
