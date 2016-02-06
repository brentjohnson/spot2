"use strict"


////////////////////////////////////////////////////////////////////
// Publish
//


// Authorized users can view secrets
Meteor.publish("animals", function () {

  return Meteor.animals.find();

  if (Roles.userIsInRole(this.userId, ["admin","secrets"])) {
    console.log('publishing secrets', this.userId)
    return Meteor.secrets.find()
  }

  this.stop()
  return
});

Meteor.publish("animalDetail", function (animalId) {

  console.log("Server publish animal: "+animalId);

  return Meteor.animals.find({_id: animalId});


  if (Roles.userIsInRole(this.userId, ["admin","secrets"])) {
    console.log('publishing secrets', this.userId)
    return Meteor.secrets.find()
  }

  this.stop()
  return
});
