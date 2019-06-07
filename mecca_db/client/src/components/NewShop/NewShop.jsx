import React from 'react'
import { createShop } from '../../services/api-helper'
import { Redirect } from 'react-router-dom'

class NewShop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isCreated: false,
      user_id: 7
    }
  }

  onShopFormChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  onShopFormSubmit = async (event) =>{
    event.preventDefault()
    console.log(`form submitted`);

    let newShop = {
      name: this.state.name,
      url: this.state.url,
      photo_url: this.state.photo_url,
      description: this.state.description,
      is_green: this.state.is_green,
      category: this.state.category,
      user_id: this.state.user_id
    }

    const shop = await createShop(this.state.user_id, newShop)

    this.setState({
      shop: shop,
      created: true
    })
    if (this.setState.created === true) {
      return <Redirect to='/user/dashboard' />
    }
  }

  render(){
    return(
      <div>
        <h2>New Shop</h2>
        <form onSubmit={this.onShopFormSubmit}>
          <div>
            <label htmlFor="name">Name of Business</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Url</label>
            <input
              id="url"
              type="text"
              name="url"
              onChange={this.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Photo Url</label>
            <input
              id="photo_url"
              type="text"
              name="photo_url"
              onChange={this.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              onChange={this.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Is this a green business?</label>
            <input
              id="is_green"
              type="text"
              name="is_green"
              onChange={this.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Category</label>
            <input
              id="category"
              type="text"
              name="category"
              onChange={this.onShopFormChange}
            />
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewShop