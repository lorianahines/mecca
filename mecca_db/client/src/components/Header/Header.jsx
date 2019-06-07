import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>Mecca</h1>
        <button >Sign Up</button>
        <button onClick={this.props.clickedLogin}>Login</button>
        <Link to="/main">Shops</Link>
      </header>
    )
  }
}

export default Header