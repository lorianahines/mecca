import React from 'react'

class Dashboard extends React.Component{
  renderUser = () =>{
    const { user } = this.props
    return (
      <div>
        <h2>{user.first_name}</h2>
      </div>
    );
  
  }
  render(){
    return(
      <div>
        {(this.props.user) ? this.renderUser():  <h1>Loading...</h1>}
      </div>
    )
  }
}

export default Dashboard