import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
          {this.props.reviews.map(r => <Review key = {r.id} deleteReview = {this.props.deleteReview} review = {r} />)}
      </ul>
    );
  }
};

export default Reviews;
