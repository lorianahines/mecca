import React from 'react'


class EditShop extends React.Component{
  render(){
    return(
      <div className='form-ctn'>
        <form onSubmit={this.props.onShopFormSubmit}>
        <h2>Edit Shop</h2>
          <div>
            <label htmlFor="name">Name of Business</label>
            <input
              id="name"
              type="text"
              name="name"
              defaultValue={this.props.shop.name}
              onChange={this.props.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Url</label>
            <input
              id="url"
              type="text"
              name="url"
              defaultValue={this.props.shop.url}
              onChange={this.props.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Photo Url</label>
            <input
              id="photo_url"
              type="text"
              name="photo_url"
              defaultValue={this.props.shop.photo_url}
              onChange={this.props.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              defaultValue={this.props.shop.description}
              onChange={this.props.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Is this a green business?</label>
            <input
              id="is_green"
              type="text"
              name="is_green"
              defaultValue={this.props.shop.is_green}
              onChange={this.props.onShopFormChange}
            />
          </div>
          <div>
            <label htmlFor="name">Category</label>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={this.props.shop.category}
              onChange={this.props.onShopFormChange}
            />
          </div>
          <div>
            <button>Edit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditShop