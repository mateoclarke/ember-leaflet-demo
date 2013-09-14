App.Router.map(function() {
  this.resource('startups', { path: '/' }, function() {
    this.resource('startup', { path: ':startup_id' });
    this.route('new', { path: 'new_startup'});
  });
});

//App.Router.reopen({
//  location: 'history'
//});
