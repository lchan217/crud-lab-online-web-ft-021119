import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let restaurant = {...this.state, id: cuid()}
    this.props.addRestaurant(restaurant)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
        <p>
          <label>Restaurant Input:</label>
          <input
        type="text"
        onChange={this.handleChange} value={this.state.text}/>
        </p>
        <input type="submit" />
     </form>
      </div>
    );
  }
};

export default RestaurantInput;
