Template.animals.onCreated(function () {
  this.subscribe("animals")
})

Template.animalList.helpers({
  animals: function () {
    return Meteor.animals.find()
  }
})

Template.animalDetail.onCreated(function () {
  this.subscribe("animalDetail", this.data.animalId);
  console.log("SUBSCRIBED!?");
})

Template.animalDetail.helpers({
  animalDetail: function () {
  	console.log(Meteor);
//  	return [{name: '1'},{name: '2'}];
    return Meteor.animals.find();
  }
})
