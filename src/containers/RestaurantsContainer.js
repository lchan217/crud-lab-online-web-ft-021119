import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import Restaurant from '../components/restaurants/Restaurant'
import { addRestaurant, deleteRestaurant } from '../actions/restaurant';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        {this.props.restaurants.map((restaurant,idx) => <Restaurant key={idx} restaurant={restaurant} delete={this.props.delete}/>)}
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      restaurants: state.restaurants
    };
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant)),
    delete: (id) => dispatch(deleteRestaurant(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
