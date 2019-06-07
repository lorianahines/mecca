import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import { displayAllShops, getUser, getAllReviews } from './services/api-helper'


// import components
import LandingPage from './components/LandingPage/LandingPage'
import MainPage from './components/MainPage/MainPage'
import ShopPage from './components/ShopPage/ShopPage'
import Dashboard from './components/Dashboard/Dashboard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shops: null,
      reviews: [],
      shopsLoaded: false,
      category: null,
      categoryShops: [],
      wantsToLogin: false,
      user: null,
      userShops: null,
      singleShop: JSON.parse(localStorage.getItem('currentShop'))
    };
  } 

  componentDidMount = async () => {
    this.fetchAllShops()
    this.fetchUser()
    this.fetchAllReviews()
    }
  
    fetchAllShops = async ()=>{
      const shopsData = await displayAllShops();
      this.setState({
        shops: shopsData
      })
    }

    fetchAllReviews = async ()=>{
      const reviewsData = await getAllReviews();
      this.setState({
        reviews: reviewsData
      })
    }
  
    fetchUser = async () => {
      const user = await getUser(7)
      this.setState({
        user: user
      })
      this.getUserShops()
    }
  
    selectCategory = (e) =>{
      const category = (e.target.innerHTML).toLowerCase()
      this.setState({
        category: category
      })
      console.log(category)
      this.filterCategoryShops()
    }
  
    filterCategoryShops = async ()=>{
      await this.state.category
      const { category, shops } = this.state
      if (category){
        const categoryShops = await shops.filter( shop => shop.category == category) 
        this.setState({
          categoryShops: categoryShops
        })
      } 
    }
  
    getUserShops = async () =>{
      await this.state.user
      await this.state.shops
      const { user, shops } = this.state
      if (user){
        const userShops = shops.filter( shop => shop.user_id == 7) 
        this.setState({
          userShops: userShops
        })
      } 
    }
    clickedLogin = () =>{
      this.setState({
        wantsToLogin: true
      })
    }
    
    handleShopPage = (shop) =>{
      localStorage.setItem('currentShop', JSON.stringify(shop))
      this.setState({
        singleShop: JSON.parse(localStorage.getItem('currentShop'))
      })
    }
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=> <LandingPage/>}/>
          <Route exact path='/main' 
            render={()=> <MainPage 
            clickedLogin={this.clickedLogin}
            wantsToLogin={this.state.wantsToLogin}
            selectCategory={this.selectCategory}
            shops={this.state.shops} 
            category={this.state.category}
            categoryShops={this.state.categoryShops}
            handleShopPage={this.handleShopPage}/>}/>
          <Route exact path='/main/business' render={()=> <ShopPage shop={this.state.singleShop}/>}/>
          <Route exact path='/user/dashboard' render={()=> <Dashboard user={this.state.user} shops={this.state.userShops}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
