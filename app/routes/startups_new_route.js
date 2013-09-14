App.StartupsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('startup');
  }
});
