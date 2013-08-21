
Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_friends']
  }
});

Template.homeCarousel.insideClick = function () {
  var clickCheck = Session.get("divingIn");
  return clickCheck;
}

Template.homeCarousel.siteEntry = function () {
  mixpanel.track("Site Entry");
}

Template.actionButtons.events({
  'mouseup #donate-action, touchend #donate-action': function () {
    mixpanel.track("Donate Button");
    Session.set("donate", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true)
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("teach", false);
    Session.set("learn", false);
  },
  'mouseup #volunteer-action, touchend #volunteer-action': function () {
    mixpanel.track("Volunteer Button");
    Session.set("teach", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true)
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("donate", false);
    Session.set("learn", false);
  },
  'mouseup #learn-action, touchend #learn-action': function () {
    mixpanel.track("Learn Button");
    Session.set("learn", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true)
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("donate", false);
    Session.set("teach", false);
  }
})

Template.navigation.events({
  'mouseup #code-school, touchend #code-school': function () {
    mixpanel.track("Code School Nav");
    Session.set("codeSchool", true);
    Session.set("divingIn", true);
    Session.set("showValues", false);
    Session.set("aboutInfo", false);
    Session.set("donate", false);
    Session.set("teach", false);
    Session.set("learn", false);
  },
  'mouseup #values, touchend #values': function () {
    mixpanel.track("Values Nav");
    Session.set("showValues", true);
    Session.set("divingIn", true);
    Session.set("codeSchool", false);
    Session.set("aboutInfo", false);
    Session.set("donate", false);
    Session.set("teach", false);
    Session.set("learn", false);
  },
  'mouseup #about, touchend #about': function () {
    mixpanel.track("About Nav");
    Session.set("aboutInfo", true);
    Session.set("divingIn", true);
    Session.set("codeSchool", false);
    Session.set("showValues", false);
    Session.set("donate", false);
    Session.set("teach", false);
    Session.set("learn", false);
  },
  'mouseup #nav-brand, touchend #nav-brand': function () {
    mixpanel.track("Brand Home Nav");
    Session.set("aboutInfo", false);
    Session.set("divingIn", false);
    Session.set("codeSchool", false);
    Session.set("showValues", false);
    Session.set("donate", false);
    Session.set("teach", false);
    Session.set("learn", false);
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



