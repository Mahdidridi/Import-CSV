Meteor.publish('addresses',function(){
  return Address.find();
})
