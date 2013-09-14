App.StartupRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('startup', params.startup_id);
  }
});
