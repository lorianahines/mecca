import React from 'react'
import { Link } from "react-router-dom";


class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome to:</p>
        <h1>Mecca</h1>
        <p>Where you can find a black-owned business for all your needs.</p>
        <button><Link to="/main">Enter</Link></button>
        <main>

        </main>
      </div>
    );
  }
}

export default LandingPage

