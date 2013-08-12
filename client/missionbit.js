

Template.homeCarousel.insideClick = function () {
  var clickCheck = Session.get("divingIn");
  return clickCheck;
}

Template.navigation.events({
  'mouseup #code-school, touchend #code-school': function () {
    Session.set("codeSchool", true);
    Session.set("divingIn", true);
    Session.set("showValues", false);
    Session.set("aboutInfo", false);
  },
  'mouseup #values, touchend #values': function () {
    Session.set("showValues", true);
    Session.set("divingIn", true);
    Session.set("codeSchool", false);
    Session.set("aboutInfo", false);
  },
  'mouseup #about, touchend #about': function () {
    Session.set("aboutInfo", true);
    Session.set("divingIn", true);
    Session.set("codeSchool", false);
    Session.set("showValues", false);
  }
})

Template.leaderboard.events({
  'click input.add': function () {
    var new_player_name = document.getElementById("new_player_name").value;
    Players.insert({name: new_player_name, score: 0});
  }
});


// >>>>>>>>>> LEADERBOARD METHODS <<<<<<<<<<<<<< //

Template.leaderboard.players = function () {
  return Players.find({}, {sort: {score: -1, name: 1}});
};

Template.leaderboard.selected_name = function () {
  var player = Players.findOne(Session.get("selected_player"));
  return player && player.name;
};

Template.player.selected = function () {
  return Session.equals("selected_player", this._id) ? "selected" : '';
};

Template.player.events({
  // 'click': function () {
  //   Session.set("selected_player", this._id);
  // }
  'click .vote-trigger': function () {
    Session.set("selected_player", this._id);
    Players.update(Session.get("selected_player"), {$inc: {score: 5}});
  }
});

// Template.leaderboard.events({
//   'click input.inc': function () {
//     Players.update(Session.get("selected_player"), {$inc: {score: 5}});
//   }
// });

// Template.leaderboard.events({
//   'click input.sub': function () {
//     Players.update(Session.get("selected_player"), {$inc: {score: -3}});
//   }
// });



