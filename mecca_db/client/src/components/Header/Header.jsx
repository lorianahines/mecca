import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  render(){
    return(
      <header>
        <Link to="/main" id='shop-link'>Shops</Link>
        <h1>Mecca</h1>
        <div id='auth-buttons'>
          <button className='user-btns' onClick={this.props.clickedLogin}>Login</button>
          <button className='user-btns' id='sign-up'><Link to="/user/dashboard" id='shop-link'>Dashboard</Link></button>
         
        </div>
      </header>
    )
  }
}

export default Header