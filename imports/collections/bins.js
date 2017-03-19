import { Mongo } from 'meteor/mongo'

Meteor.methods({
  // define insert method with sane defaults
  // fat arrow function binds this, use reg function
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId,
    })
  },
  // remove bin matching given bin object
  'bins.remove': function(bin) {
    return Bins.remove(bin)
  }
})

export const Bins = new Mongo.Collection('bins')
