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
})

Template.animalDetail.helpers({
  animalDetail: function () {
    return Meteor.animals.find();
  }
})
