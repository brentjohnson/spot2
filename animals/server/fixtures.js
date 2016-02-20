"use strict";


////////////////////////////////////////////////////////////////////
// Startup Fixtures
//

Meteor.startup(function () {

  createAnimals()

});


function createAnimals () {


  if (Meteor.animals.find().fetch().length === 0) {
    // Should call the Animals.createAnimal() method.
    Meteor.animals.insert({name: "Benny", gender: "male", location: "adopted"});
    Meteor.animals.insert({name: "Norah", gender: "female", location: "adopted"});
    Meteor.animals.insert({name: "Peanut", gender: "male", location: "adopted"});
    Meteor.animals.insert({name: "Clyde", gender: "male", location: "adopted"});
    Meteor.animals.insert({name: "Petunia", gender: "female", location: "foster"});
    Meteor.animals.insert({name: "Bitsy", gender: "female", location: "boarding"});
  }

/*
  var users

  if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    users = [
      {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"View-Secrets User",email:"view@example.com",roles:['secrets']},
      {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
      {name:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

    _.each(users, function (userData) {
      var id
      
      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "apple1",
        profile: { name: userData.name }
      });

      // email verification
      Meteor.users.update({_id: id},
                          {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);
    
    });
  }
*/
}
