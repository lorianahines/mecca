import React from 'react'
import Header from '../Header/Header'
import NewShop from '../NewShop/NewShop'
import EditShop from '../EditShop/EditShop'
import { updateShop, deleteShop } from '../../services/api-helper'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component{
  constructor(){
    super();
    this.state = {
      addNewShop: false,
      updateShop: false,
      currentShop: null,
      isEdited: false,
      isCreated: false,
      shop: null

    }
  }
  renderUser = () =>{
    const { user, shops } = this.props
    return (
      <div>
        <h2>Welcome, {user.first_name}!</h2>
      </div>
    );
  }

  renderShops = () =>{
    const { shops } = this.props
    return shops.map((shop) => {
      return (
        <div key={shop.id} className='shop-card'>
          <h2>{shop.name}</h2>
          <img src={shop.photo_url}/>
          <p>{shop.description}</p>
          <a href={shop.url}>Visit</a>
          <button onClick={()=> this.handleUpdateShop(shop)}>Edit</button>
          <button onClick={()=> this.handleDeleteShop(shop.user_id, shop.id)}>Delete</button>
        </div>
      );
    });
  }

  handleNewShop = () =>{
    if(this.state.addNewShop){
      this.setState({
        addNewShop: false
      })
    }else{
      this.setState({
        addNewShop: true
      })
    }
    
  }

  handleCreate= () =>{
    this.setState({
      isCreated: true
    })
  }

  handleUpdateShop = (shop) =>{

    this.setState({
      updateShop: true,
      shop: shop
    })
  }

  handleDeleteShop =  async (userID, shopID) =>{
    await deleteShop(userID, shopID)
    await this.props.getShops()
    await this.props.getUserShops()
  }

  onShopFormChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    this.setState(prevState =>{
      let newShop = prevState.shop
      newShop[name] = value
      console.log(newShop)
      return newShop
    })
  }

  onShopFormSubmit = async (event) =>{
    event.preventDefault()

    let editShop = {
      name: this.state.name,
      url: this.state.url,
      photo_url: this.state.photo_url,
      description: this.state.description,
      is_green: this.state.is_green,
      category: this.state.category,
      user_id: this.state.user_id
    }

    const shop = await updateShop(this.state.user_id, this.state.shop.id, editShop)
    console.log(`You updated the shop!`);
    this.setState({
      shop: shop,
      updateShop: false
    })
    
  }

  render(){
    return(
      <div>
        <Header />
        {(this.props.user) ? this.renderUser():  <h1>Loading...</h1>}
        <div id="dash-container">
        <button onClick={this.handleNewShop}>Add new business</button>
          <div className='shop-card-ctn'>
            {(this.state.addNewShop) ? 
              <NewShop 
                getShops={this.props.getShops} 
                handleCreate={this.handleCreate} 
                handleNewShop={this.handleNewShop}
                getUserShops={this.props.getUserShops}
                user={this.props.user}
                /> 
              : null }
            {(this.state.updateShop) ? 
              <EditShop 
                shop={this.state.shop} 
                onShopFormChange={this.onShopFormChange} 
                onShopFormSubmit={this.onShopFormSubmit}
                user={this.props.user}
              /> 
              : null }
            {(this.props.shops) ? this.renderShops():  <h1>Loading Your Businesses, Boss...</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard