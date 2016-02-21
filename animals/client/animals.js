Template.mainLayout.onCreated(function () {
  this.subscribe("animals")
})

Template.animalList.helpers({
  animals: function () {

  	let query = {};

  	let coordinator = FlowRouter.getQueryParam('coordinator');

  	if (FlowRouter.getQueryParam('inBoarding') === '') {
  		query = {location: 'boarding'};
  	}

  	if (coordinator) {
 		query = {coordinator: coordinator};
  	}

    return Meteor.animals.find(query, {sort: {name: 1}});
  }
})

// Template.animalDetail.onCreated(function () {
//   this.subscribe("animalDetail", this.data.animalId);
// })

Template.animalDetail.helpers({
	animal: function () {
		console.log(this.data);
		return Meteor.animals.findOne({_id: FlowRouter.getParam('animalId')});
	}
})


Template.sidebarMenu.helpers({
	animals: function() {
		return Meteor.animals.find({}, {sort: {name: 1}});
	},

	males: function() {
		return Meteor.animals.find({gender: "male"}, {sort: {name: 1}});
	},

	females: function() {
		return Meteor.animals.find({gender: "female"}, {sort: {name: 1}});
	},
	
	inBoarding: function() {
		return Meteor.animals.find({location: "boarding"}, {sort: {name: 1}});
	},
	
	inFoster: function() {
		return Meteor.animals.find({location: "foster"}, {sort: {name: 1}});
	},

	coordinatedCount: function(coordinator) {
		return Meteor.animals.find({coordinator: coordinator}).count();
	}
	
})