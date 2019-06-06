import React from 'react'
import Header from '../Header/Header'
import CategoryList from '../CategoryList/CategoryList'
import axios from 'axios'

import { displayAllShops } from '../../services/api-helper'


class MainPage extends React.Component{
  constructor() {
    super();
    this.state = {
      shops: null,
      shopsLoaded: false,
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

  render(){
    return(
      <div>
        <Header/>
        <main>
          <CategoryList />
        </main>
      </div>

    )
  }
}

export default MainPage