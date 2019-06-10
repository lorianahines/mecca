import React from 'react'
import './ShopCard.css'
import { Link } from 'react-router-dom'

class ShopCard extends React.Component{

  renderShops = () =>{
    const { shops } = this.props
    return shops.map((shop) => {
      return (
        <div key={shop.id} className='shop-card'>
          <h2>{shop.name}</h2>
          <img src={shop.photo_url}/>
          <p className="descript">{shop.description}</p>
          <a href={shop.url}>Visit</a>
          <Link to="/main/business" onClick={() => this.props.handleShopPage(shop)}>More...</Link>
        </div>
      );
    });
  }

  renderCategoryShops = () =>{
    const { categoryShops } = this.props
    return categoryShops.map((shop) => {
      return (
        <div key={shop.id} className='shop-card'>
          <h2>{shop.name}</h2>
          <img src={shop.photo_url}/>
          <p className="descript">{shop.description}</p>
          <a href={shop.url}>Visit</a>
          <Link to="/main/business">More...</Link>
        </div>
      );
    });
  }
  render(){
    return(
      <div className='shop-card-ctn'>
        {(this.props.categoryShops.length > 0) ? this.renderCategoryShops() : (this.props.shops)? this.renderShops() : <p>Loading</p>}
      </div>
    )
  }
}

export default ShopCard