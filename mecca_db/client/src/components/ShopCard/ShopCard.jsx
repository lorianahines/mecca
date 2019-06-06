import React from 'react'
import { Link } from 'react-router-dom'

class ShopCard extends React.Component{

  renderShops = () =>{
    const { shops } = this.props
    return shops.map((shop) => {
      return (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <img src={shop.photo_url}/>
          <p>{shop.description}</p>
          <a href={shop.url}>Visit</a>
          {/* <Link to="/main/business">More...</Link> */}
        </div>
      );
    });
  }

  renderCategoryShops = () =>{
    const { categoryShops } = this.props
    return categoryShops.map((shop) => {
      return (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <img src={shop.photo_url}/>
          <p>{shop.description}</p>
          <a href={shop.url}>Visit</a>
          {/* <Link to="/main/business">More...</Link> */}
        </div>
      );
    });
  }
  render(){
    return(
      <div>
        {(this.props.categoryShops.length > 0) ? this.renderCategoryShops() : (this.props.shops)? this.renderShops() : <p>Loading</p>}
      </div>
    )
  }
}

export default ShopCard