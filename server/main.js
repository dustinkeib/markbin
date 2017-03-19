import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins'

// code to run on server at startup
Meteor.startup(() => {
  // Reg function to access this.userId
  // returns only bins which match this.userId
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId })
  })
});
