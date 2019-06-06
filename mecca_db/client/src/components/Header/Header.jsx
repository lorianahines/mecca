import React from 'react'

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>Mecca</h1>
        <button >Sign Up</button>
        <button onClick={this.props.clickedLogin}>Login</button>
      </header>
    )
  }
}

export default Header