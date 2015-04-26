Meteor.methods({
  'uploadFile':function(fileid,filename){
    var fs = Meteor.npmRequire('fs');
    var file = Uploads.find({_id:fileid});
    Meteor.setTimeout(function(){
      // I use absolute paths to folder imports."/home/username/imports"
      var filepath = '/imports/uploads-' + fileid + '-' + filename;
      CSV().from.stream(
        fs.createReadStream(filepath),
        {'escape':'\\'})
        .on('record',Meteor.bindEnvironment(function(row,index){
          Address.insert({
            'name':row[0],
            'email':row[1],
            'status':row[2]
          })
        }, function(error){
          console.log(error);
        }))
        .on('error',function(err){
          console.log(err);
        })
        .on('end',function(count){

        })
    },1000)
  }
})
