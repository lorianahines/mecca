import React from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import decode from 'jwt-decode'
import { displayAllShops, getUser, getAllReviews, loginUser } from './services/api-helper'


// import components
import LandingPage from './components/LandingPage/LandingPage'
import MainPage from './components/MainPage/MainPage'
import ShopPage from './components/ShopPage/ShopPage'
import Dashboard from './components/Dashboard/Dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      shopsLoaded: false,
      singleShop: JSON.parse(localStorage.getItem('currentShop')),
      reviews: null,
      category: null,
      categoryShops: [],
      wantsToLogin: false,
      user: JSON.parse(localStorage.getItem('user')) || null,
      currentUser: null,
      userShops: null,
      authFormData: {
        email: "",
        password: ""
      }
      
    };
  } 

  componentDidMount = async () => {
    this.fetchAllShops()
    this.fetchAllReviews()
    }
  
  // -------------------------  Auth ------------------------------//
  handleLogin = async () => {
      const userData = await loginUser(this.state.authFormData)
      if (userData) {
        this.setState({
          currentUser: decode(userData.token)
        })
        localStorage.setItem("jwt", userData.token);
        this.fetchUser()
        this.clickedLogin()
      }else{
        return <Redirect to='/main'/>
      }
    }

  authHandleChange = (e) => {
      const { name, value } = e.target;
      this.setState(prevState => ({
        authFormData: {
          ...prevState.authFormData,
          [name]: value
        }
      }))
    }
  

    fetchUser = async () => {
      const userInfo = await getUser(this.state.currentUser.user_id)
      localStorage.setItem('user', JSON.stringify(userInfo))
      this.setState({
        user: JSON.parse(localStorage.getItem('user'))
      })
      this.getUserShops()
    }
  
    clickedLogin = () =>{
      if(this.state.wantsToLogin){
        this.setState({
          wantsToLogin: false
        })
      }
      else{
        this.setState({
          wantsToLogin: true
        })
      }
      
    }

    handleLoginButton = () =>{
      this.handleLogin();
    }
  

  //--------------------------Shops & Reviews --------------------//
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
        const userShops = shops.filter( shop => shop.user_id == this.state.currentUser.user_id) 
        this.setState({
          userShops: userShops
        })
      } 
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
            handleShopPage={this.handleShopPage}
            authHandleChange={this.authHandleChange}
            handleLoginButton={this.handleLoginButton}
            user={this.state.user} />}/>

          <Route exact path='/main/business' 
            render={()=> <ShopPage 
            shop={this.state.singleShop}
            reviews={this.state.reviews}
            wantsToLogin={this.state.wantsToLogin}
            clickedLogin={this.clickedLogin}
            authHandleChange={this.authHandleChange}
            handleLoginButton={this.handleLoginButton}
            user={this.state.user}/>}/>

          <Route exact path='/user/dashboard' 
            render={()=> <Dashboard 
            user={this.state.user} 
            currentUser={this.state.currentUser}
            shops={this.state.userShops} 
            getShops={this.fetchAllShops}
            getUserShops={this.getUserShops}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
