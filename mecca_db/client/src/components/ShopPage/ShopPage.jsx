import React from 'react'
import './ShopPage.css'
import Header from '../Header/Header'
import NewReview from '../NewReview/NewReview'
import LoginForm from '../LoginForm/LoginForm'


class ShopPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      reviews: JSON.parse(localStorage.getItem('reviews')),
      shop_id: null,
      addNewReview: false
    }
  }

  componentDidMount = () =>{
    this.setShopId()
    this.shopReviews()
  }

  setShopId = async () =>{
    this.setState({
      shop_id: this.props.shop.id
    })
  }
  renderShop = () =>{
    const { shop } = this.props
    return <div className='shop-card single-shop-card'>
            <h1>{shop.name}</h1>
            <img className='single-img' src={shop.photo_url}/>
            <p>{shop.description}</p>
            <a href={shop.url}>Visit</a>
          </div>
    
  }

  shopReviews = async () => {
    await this.props.reviews
    if (this.props.reviews){
      const { reviews } = this.props
      const { shop_id } = this.state
      // console.log('all reviews', reviews)
      const shopReviews = reviews.filter(review => review.business_id == shop_id)
      localStorage.setItem('reviews', JSON.stringify(shopReviews))
      this.setState({
        reviews: JSON.parse(localStorage.getItem('reviews'))
      })
    }
  }
  renderReviews = () => {
    const { reviews } = this.state
    return reviews.map(review => {
      return (
        <div key={review.id} className='shop-card review-card'>
          <div className='review-top'>
            <h2>{review.title}</h2>
            <h3>{review.review_date}</h3>
          </div>
          <h3>{review.rating}/10</h3>
          <p>{review.review_body}</p>
        </div>
      )
    })
  }

  handleNewReview = () =>{
    this.setState({
      addNewReview: true
    })
  }

  render(){
    return(
      <div>
        <Header clickedLogin={this.props.clickedLogin}/>
        {(this.props.wantsToLogin) ? <LoginForm  close={this.props.clickedLogin} authHandleChange={this.props.authHandleChange}
            handleLoginButton={this.props.handleLoginButton} user={this.props.user}/> : null }
        <div className='shop-page-ctn'>
        {(this.props.shop) ? this.renderShop() : <h1>Loading Store...</h1>}
          <h2 className='review-title'>Reviews</h2>
          <button onClick={this.handleNewReview}>Add review</button>
          {(this.state.addNewReview) ? <NewReview  shop_id={this.state.shop_id}/> : null }
          {(this.state.reviews && this.state.reviews.length > 0) ? this.renderReviews() : <h4>Be the first to review!</h4>}
        </div>
      </div>
    )
  }
}

export default ShopPage