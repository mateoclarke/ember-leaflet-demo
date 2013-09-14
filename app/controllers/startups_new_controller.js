App.StartupsNewController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var model = this.modelFor('startupsNew');
      model.save().then(function() {
        this.transitionToRoute('startup', model);
      }, function() {
        alert('error');
      });
    }
  }
});
