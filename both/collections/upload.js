Uploads = new FS.Collection("uploads", {
  // I use absolute paths to folder imports."/home/username/imports"
  stores: [new FS.Store.FileSystem("uploads", {path: "/imports/"})]
});
Uploads.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});
