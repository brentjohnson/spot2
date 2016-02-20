"use strict"

////////////////////////////////////////////////////////////////////
// Routing for Secrets
//
// Authentication is handled in mainLayout.
// Authorization is handled in secretsController and can be reused for any route.
//
FlowRouter.route('/animals', {
  action: function () {
    BlazeLayout.render('mainLayout', {content: 'animals'})
  }
})

FlowRouter.route('/animals/:animalId', {
  action: function (params) {
    BlazeLayout.render('mainLayout', {content: 'animalDetail'});
  }
})
