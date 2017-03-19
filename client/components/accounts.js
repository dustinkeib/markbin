import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

// Note:
// Meteor ships with everything needed for auth using built in templates which
// use Blaze. Since we're uing react, we must take special care to only
// manipulate the DOM for this purpose.  See componentDidMount and
// componentWillUnmount for futher details.

class Accounts extends Component {

  // called every time component is rendered
  componentDidMount() {
    // render accts form from blaze in div from react 'render' method in main.js
    // save to a var so we can clean up later
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container))
  }

  //called every time component is removed
  componentWillUnmount() {
    // Find blaze forms we created, and destroy them
    Blaze.remove(this.view)
  }

  render() {
    return (
      <div ref="container"></div>
    )
  }
}

export default Accounts
