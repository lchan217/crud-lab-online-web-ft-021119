import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../actions/restaurant.js';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      reviews: state.reviews
    };
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch(addReview(review)),
    delete: (id) => dispatch(deleteReview(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
