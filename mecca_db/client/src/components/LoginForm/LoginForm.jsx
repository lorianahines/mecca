import React from 'react'
import { Link } from 'react-router-dom'


class LoginForm extends React.Component{
  render(){
    return(
      <form >
        <h3>Login</h3>
        <input type ="text" placeholder="email"></input>
        <input type ="text" placeholder="password"></input>
        <button type="submit"><Link to="/user/dashboard">Login</Link></button>
      </form>
    )
  }
}

export default LoginForm 