import React, { Component } from 'react'
import {connect} from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview = {this.props.addReview} restaurantId = {this.props.restaurant.id} />
          <Reviews  deleteReview = {this.props.deleteReview} reviews = {this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id)}/>
      </div>
    )
  }
}
function mapStateToProps({reviews}) {
    return {reviews};
}

function mapDispatchToProps(dispatch) {
    return {
        addReview: review => dispatch({type: "ADD_REVIEW", review}),
        deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( ReviewsContainer )
