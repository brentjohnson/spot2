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
		return Meteor.animals.find();
	},

	males: function() {
		return Meteor.animals.find({gender: "male"});
	},

	females: function() {
		return Meteor.animals.find({gender: "female"});
	},
	
	inBoardings: function() {
		return Meteor.animals.find({inBoarding: "true"});
	},
	
	inFosters: function() {
		return Meteor.animals.find({inFoster: "true"});
	}
	
})