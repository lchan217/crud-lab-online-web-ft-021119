import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    if (this.props.reviews) {
      const filteredList = this.props.reviews.filter(review => this.props.restaurantId === review.restaurantId)
      const reviewsList = filteredList.map((review,idx) => <Review key={idx} review={review} delete={this.props.delete}/> )
      return reviewsList
    }
  }

  render() {

    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
