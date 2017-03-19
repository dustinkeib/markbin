import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

class BinsList extends Component {
  render() {
    return (
      <div>Bins List</div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins')

  // only bins provided by bins publication
  // which includes only bins created by this.userId
  return { bins: Bins.find({}).fetch() }
}, BinsList)
