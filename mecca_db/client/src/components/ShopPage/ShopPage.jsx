import React from 'react'
import Header from '../Header/Header'

class ShopPage extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div>
            <h2>"shop.name"</h2>
            <img/>
            <p>"shop.description"</p>
            <a href='#'>Visit</a>
        </div>
      </div>
    )
  }
}

export default ShopPage