import React from 'react'
import Header from '../Header/Header'
import CategoryList from '../CategoryList/CategoryList'
import ShopCard from '../ShopCard/ShopCard'
import axios from 'axios'

import { displayAllShops } from '../../services/api-helper'



class MainPage extends React.Component{
  constructor() {
    super();
    this.state = {
      shops: null,
      shopsLoaded: false,
      category: null,
      categoryShops: []
    };
  } 

  componentDidMount = async () => {
  this.fetchAllShops()
  }

  fetchAllShops = async ()=>{
    const shopsData = await displayAllShops();
    this.setState({
      shops: shopsData
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
      const categoryShops = shops.filter( shop => shop.category == category) 
      this.setState({
        categoryShops: categoryShops
      })
    } 
  }

  render(){
    return(
      <div>
        <Header/>
        <main>
          <CategoryList 
            selectCategory={this.selectCategory} 
          />
          <ShopCard 
            shops={this.state.shops} 
            category={this.state.category}
            categoryShops={this.state.categoryShops}/>
        </main>
      </div>

    )
  }
}

export default MainPage