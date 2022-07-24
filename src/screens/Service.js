import React from 'react';
import { Link } from 'react-router-dom';

class Service extends React.Component {
  render() {
    return (
      <div>
        <p>Service</p>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/service">Service</Link></p>
      </div>
    )
  }
}

export default Service;
