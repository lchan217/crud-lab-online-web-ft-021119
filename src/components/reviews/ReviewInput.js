import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {
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
    let review = {...this.state, id: cuid(), restaurantId: this.props.restaurantId}
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
        <p>
          <label>Review Input:</label>
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

export default ReviewInput;
