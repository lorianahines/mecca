import React from 'react'
import './CategoryList.css'

class CategoryList extends React.Component{
  render(){
    return(
      <nav>
        <ul>
          <li onClick={this.props.selectCategory}>Beauty</li>
          <li onClick={this.props.selectCategory}>Clothing</li>
          <li onClick={this.props.selectCategory}>Household</li>
          <li onClick={this.props.selectCategory}>Electronics</li>
        </ul>
      </nav>
    )
  }
}

export default CategoryList