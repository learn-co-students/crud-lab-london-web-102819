import React, { Component } from 'react';
import Restaurant from './Restaurant.js';

class Restaurants extends Component {
  render() {
    return(
      <ul>
          {this.props.restaurants.map(r => <Restaurant deleteRestaurant = {this.props.deleteRestaurant} key = {r.id} restaurant = {r} />)}
      </ul>
    );
  }
};

export default Restaurants;
