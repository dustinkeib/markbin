import React, { Component } from 'react'
import Accounts from './accounts'

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="nav navbar-header">
          <a className="nav navbar-brand">Markbin</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Accounts /></li>
          <li><a>Create bin</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header
