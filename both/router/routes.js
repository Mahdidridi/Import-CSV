Router.route('/', {
  name: 'home',
  waitOn:function(){
    return Meteor.subscribe('addresses');
  }
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
