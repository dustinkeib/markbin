import React, { Component } from 'react'
import Accounts from './accounts'

class Header extends Component {
  onBinClick (event) {
    // Don't refresh browser
    event.preventDefault()
    Meteor.call('bins.insert')
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="nav navbar-header">
          <a className="nav navbar-brand">Markbin</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Accounts /></li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create bin</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
