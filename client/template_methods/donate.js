
Template.donateCash.events({
  'mouseup #100-donate-button, touchend #100-donate-button': function() {
    mixpanel.track("100-Donate");
  },
  'mouseup #250-donate-button, touchend #250-donate-button': function() {
    mixpanel.track("250-Donate");
  },
  'mouseup #1000-donate-button, touchend #1000-donate-button': function() {
    mixpanel.track("1000-Donate");
  }
})


Template.letsDonate.toDonate = function () {
  var makeDonation = Session.get("donate");
  return makeDonation;
};

Template.donateCash.toDonate = function () {
  var makeDonation = Session.get("donate");
  return makeDonation;
};

Template.letsDonate.pledgeReady = function () {
  var pledgeReady = Session.get("pledgeReady");
  return pledgeReady;
};

Template.letsDonate.alreadyPledged = function () {
  var thisUser = Meteor.userId();
  if(thisUser == null) {
    return false;
  }
  if(thisUser) {
    var pledgeCheck = Pledges.find({donor: thisUser}).fetch();
    console.log(pledgeCheck);
    if(pledgeCheck[0]){
      return true;
    } else {
      return false;
    }
  }
};

Template.letsDonate.pledgeNumber = function () {
  var thisUser = Meteor.userId();
  var pledgeNumberCheck = Pledges.find({donor: thisUser}).count();
  console.log(pledgeNumberCheck);
  return pledgeNumberCheck;
};

Template.letsDonate.userPledgeTotal = function () {
  var thisUser = Meteor.userId();
  var userPledges = Pledges.find({donor: thisUser}).fetch();
  if (userPledges[0]) {
    var pledgeTotal = 0;
    var pledgeArray = _.map(userPledges, function (pledge){
      var theValue = pledge['value'];
      var thisPledge = parseInt(theValue);
      pledgeTotal = pledgeTotal + thisPledge;
      return theValue;
    })
  return pledgeTotal;
  }
};

Template.letsDonate.totalPledges = function () {
  var totalPledges = Pledges.find({}).fetch();
  if (totalPledges[0]) {
    var pledgeTotal = 0;
    var pledgeArray = _.map(totalPledges, function (pledge){
      var theValue = pledge['value'];
      var thisPledge = parseInt(theValue);
      pledgeTotal = pledgeTotal + thisPledge;
      return theValue;
    })
  return pledgeTotal;
  }
};


Template.letsDonate.events({
  'click #donate-pledge-submit': function (event) {
    mixpanel.track("Pledge Made");
    Session.set("showSupport", false);
    event.preventDefault();
    if (Meteor.userId() == null) {
      document.forms["pledge-form"].reset();
      $('.pledge-marketing').remove();
      $('#pledge-please-signin').remove();
      $('#pledge-marketing-text').append('<span id="pledge-please-signin" class="signin-alert"><h1> Please sign in to make a pledge. Thank You.</h></span>');
      // Session.set("pledgeReady", false);
      // Session.set("pledgeReady", true);
    } else {
      var pledgeValue = $('input:radio[name=pledge]:checked').val();
      console.log(pledgeValue);
      var thisUser = Meteor.userId();
      console.log(thisUser);
      var thisTime = Date.now();
      console.log(thisTime);
      Pledges.insert({
        donor: thisUser,
        value: pledgeValue,
        time: thisTime
      })
      document.forms["pledge-form"].reset();
    }
  }
});
