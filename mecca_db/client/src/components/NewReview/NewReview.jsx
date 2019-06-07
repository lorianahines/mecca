import React from 'react'
import { createReview } from '../../services/api-helper'
import { Redirect } from 'react-router-dom'

class NewReview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isCreated: false,
      user_id: 7,
      review: {}
    }
  }

  onReviewFormChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  onReviewFormSubmit = async (event) =>{
    event.preventDefault()
    console.log(`form submitted`);

    let newReview = {
      review_date: this.state.review_date,
      title: this.state.title,
      rating: this.state.rating,
      review_body: this.state.review_body,
      user_id: this.state.user_id,
      business_id: this.props.shop_id
    }

    const review = await createReview(this.state.user_id, newReview)

    this.setState({
      review: review,
      isCreated: true
    })
    if (this.setState.isCreated === true) {
      return <Redirect to='/user/dashboard' />
    }
  }

  render(){
    return(
      <div>
        <h2>New Review</h2>
        <form onSubmit={this.onReviewFormSubmit}>
          <div>
            <label htmlFor="name">Date</label>
            <input
              id="date"
              type="date"
              name="review_date"
              onChange={this.onReviewFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={this.onReviewFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Rating (out of 10)</label>
            <input
              id="rating"
              type="text"
              name="rating"
              onChange={this.onReviewFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Review</label>
            <input
              id="review_body"
              type="text"
              name="review_body"
              onChange={this.onReviewFormChange}
            />
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewReview