App.StartupsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('startup');
  }
});
