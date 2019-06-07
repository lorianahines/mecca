import React from 'react'
import Header from '../Header/Header'

class ShopPage extends React.Component{

  renderShop = () =>{
    const { shop } = this.props
    return <div>
            <h2>{shop.name}</h2>
            <img src={shop.photo_url}/>
            <p>{shop.description}</p>
            <a href={shop.url}>Visit</a>
          </div>
    
  }
  render(){
    return(
      <div>
        <Header />
        {(this.props.shop) ? this.renderShop() : <h1>Loading Store...</h1>}
      </div>
    )
  }
}

export default ShopPage