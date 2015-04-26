Address = new Mongo.Collection('addresses');

Address.helpers({

});

Address.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
