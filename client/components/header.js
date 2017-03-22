import React, { Component } from 'react'
import Accounts from './accounts'
import { Link, browserHistory } from 'react-router'

class Header extends Component {
  onBinClick (event) {
    // Don't refresh browser
    event.preventDefault()
    // insert bin record ; fire callback to navigate to /bins/binId
    Meteor.call('bins.insert', (error, binId) => {
      // programmatic navigation using browserHistory to specific binId
      browserHistory.push(`/bins/${binId}`)
    })
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="nav navbar-header">
          <Link to="/" className="nav navbar-brand">Markbin</Link>
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
