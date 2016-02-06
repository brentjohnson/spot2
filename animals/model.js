"use strict";

// run on both the server and the client

Meteor.animals = new Meteor.Collection('animals');

Meteor.animals.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 64
	},
	gender: {
		type: String,
		label: "Gender",
		allowedValues: ["male", "female"]
	}

}));

