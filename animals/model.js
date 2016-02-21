"use strict";

// run on both the server and the client

Meteor.animals = new Meteor.Collection('animals');

Meteor.animals.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		min: 1,
		max: 64
	},
	tagNumber: {
		type: String,
		label: "Tag Number",
		optional: true
	},
	licenseNumber: {
		type: String,
		label: "License Number",
		optional: true
	},
	microchipNumber: {
		type: String,
		label: "Microchip Number",
		optional: true
	},
	breed: {
		type: String,
		label: "Breed"
	},
	gender: {
		type: String,
		label: "Gender",
		allowedValues: ["male", "female"]
	},
	intakeDate: {
		type: Date,
		label: "Intake Date"
	},
	dateOfBirth: {
		type: Date,
		label: "Date of Birth",
		optional: true
	},
	location: {
		type: String,
		label: "Location",
		allowedValues: ["boarding", "foster", "shelter", "adopted"]
	},
	coordinator: {
		type: String,
		label: "Coordinator",
		allowedValues: ["Carol", "Carrie", "Kara", "Leslie", "Niki", "Unassigned"],
		defaultValue: "Unassigned"
	},
	foster: {
		type: String,
		label: "Foster",
		optional: true
	}

}));

