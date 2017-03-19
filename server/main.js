import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins'

// code to run on server at startup
Meteor.startup(() => {
  // Reg function so you can access this
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId })
  })
});
