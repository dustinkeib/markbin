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
  }
})

export const Bins = new Mongo.Collection('bins')
