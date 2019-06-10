import React from 'react'
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false
    }
  }
  logIn = (e) => {
    e.preventDefault()
    this.props.handleLoginButton()
    this.setState({isLoggedIn: true})
  }
  render(){
    if(this.state.isLoggedIn){
      return <Redirect to='/user/dashboard' />
    }
    else{
      return(
        <div className="login form-ctn">
          <form onSubmit={this.logIn}>
            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <div>
                <input className="input" name="email" type="text" placeholder="email" onChange={this.props.authHandleChange} />
              </div>
            </div>
          
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <div className="control">
                <input className="input" name="password" type="password" placeholder="password" onChange={this.props.authHandleChange}/>
              </div>
            </div>
          
            <div className="field">
              <p>
                <button className="button" type="submit">Login</button>
                <button className="button" type="submit" onClick={this.props.close}>Close</button>
              </p>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default LoginForm 



