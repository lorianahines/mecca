import React from 'react'
import Header from '../Header/Header'

class ShopPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      reviews: JSON.parse(localStorage.getItem('reviews')),
      shop_id: null
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
    return <div>
            <h2>{shop.name}</h2>
            <img src={shop.photo_url}/>
            <p>{shop.description}</p>
            <a href={shop.url}>Visit</a>
          </div>
    
  }

  shopReviews = async () => {
    await this.props.reviews
    if (this.props.reviews){
      const { reviews } = this.props
      const { shop_id } = this.state
      console.log('all reviews', reviews)
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
        <div key={review.id}>
          <h2>{review.title}</h2>
          <h3>{review.review_date}</h3>
          <h3>{review.rating}</h3>
          <p>{review.review_body}</p>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <Header />
        {(this.props.shop) ? this.renderShop() : <h1>Loading Store...</h1>}

        <h1>Reviews</h1>
        {(this.state.reviews && this.state.reviews.length > 0) ? this.renderReviews() : <h4>Loading Reviews...</h4>}
      </div>
    )
  }
}

export default ShopPage