Meteor.methods({
  addNote: function (text) {
    if (Meteor.isServer) {
      text += " (server)";
      // wait for 3 seconds
      Meteor._sleepForMs(3000);
    } else {
      text += " (client)";
    }
    Notes.insert({text: text});
  }
});