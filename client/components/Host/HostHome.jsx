import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HostHome extends Component {
  render() {
    return (
      <div>
        <h2>Host</h2>
        <ul>
          <li><Link to="/hostevents">My Events</Link></li>
          <li><Link to="/hostcreateevent">Create Event</Link></li>
          <li><Link to="/tickets">My Tickets</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
        </ul>
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}
