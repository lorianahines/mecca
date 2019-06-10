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
          {this.props.user ? <button className='user-btns' ><Link className='user-btns' to="/user/dashboard">Dashboard</Link></button> : <button className="user-btns" id="sign-up">SignUp</button>}
          {this.props.user ? <button className='user-btns' onClick={this.props.logout}>Logout</button> : <button className='user-btns' onClick={this.props.clickedLogin}>Login</button>}
         
        </div>
      </header>
    )
  }
}

export default Header