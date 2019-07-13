import React, { Component } from 'react';
import Restaurants from '../restaurants/Restaurants.js';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.delete(this.props.review.id )}> Delete Review </button>
      </div>
    );
  }

};

export default Review;
