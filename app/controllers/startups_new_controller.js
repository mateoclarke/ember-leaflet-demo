App.StartupsNewController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var self = this;
      var model = this.get('content');
      model.save().then(function() {
        self.transitionToRoute('startup', model);
      }, function() {
        alert('error');
      });
    }
  }
});
