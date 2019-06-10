import React from 'react'

class EditReview extends React.Component{
  render(){
    return(
      <div>
        <h2>Edit Review</h2>
        <form onSubmit={this.props.onReviewFormSubmit}>
          <div>
            <label htmlFor="name">Date</label>
            <input
              id="date"
              type="date"
              name="review_date"
              defaultValue={this.props.review.review_date}
              onChange={this.props.onReviewFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={this.props.review.title}
              onChange={this.props.onReviewFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Rating (out of 10)</label>
            <input
              id="rating"
              type="text"
              name="rating"
              defaultValue={this.props.review.rating}
              onChange={this.props.onReviewFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Review</label>
            <input
              id="review_body"
              type="text"
              name="review_body"
              defaultValue={this.props.review.review_body}
              onChange={this.props.onReviewFormChange}
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

export default EditReview