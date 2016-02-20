Template.mainLayout.onCreated(function () {
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


Template.sidebarMenu.helpers({
	allAnimals: function() {
		return Meteor.animals.find({}, {sort: {name: 1}});
	},

	males: function() {
		return Meteor.animals.find({gender: "male"}, {sort: {name: 1}});
	},

	females: function() {
		return Meteor.animals.find({gender: "female"}, {sort: {name: 1}});
	},
	
	inBoardings: function() {
		return Meteor.animals.find({location: "boarding"}, {sort: {name: 1}});
	},
	
	inFosters: function() {
		return Meteor.animals.find({location: "foster"}, {sort: {name: 1}});
	}
	
})