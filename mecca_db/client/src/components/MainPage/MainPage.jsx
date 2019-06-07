import React from 'react'
import Header from '../Header/Header'
import CategoryList from '../CategoryList/CategoryList'
import ShopCard from '../ShopCard/ShopCard'
import LoginForm from '../LoginForm/LoginForm'






class MainPage extends React.Component{
  
  render(){
    return(
      <div>
        <Header clickedLogin={this.props.clickedLogin}/>
        {(this.props.wantsToLogin) ? <LoginForm /> : null }
        <main>
          <CategoryList 
            selectCategory={this.props.selectCategory} 
          />
          <ShopCard 
            shops={this.props.shops} 
            category={this.props.category}
            categoryShops={this.props.categoryShops}
            handleShopPage={this.props.handleShopPage}
          />
        </main>
        
      </div>

    )
  }
}

export default MainPage