
Template.letsDonate.toDonate = function () {
  var makeDonation = Session.get("donate");
  return makeDonation;
}

Template.letsDonate.pledgeReady = function () {
  var pledgeReady = Session.get("pledgeReady");
  return pledgeReady;
}

Template.letsDonate.totalPledges = function () {
  var totalPledges = Pledges.find({}).fetch();
  if (totalPledges[0]) {
    console.log(totalPledges);
    var pledgeTotal = 0;
    var pledgeArray = _.map(totalPledges, function (pledge){
      var theValue = pledge['value'];
      var thisPledge = parseInt(theValue);
      pledgeTotal = pledgeTotal + thisPledge;
      console.log(pledgeTotal);
      return theValue;
    })
  return pledgeTotal;
  }
}


Template.letsDonate.events({
  'click #donate-pledge-submit': function (event) {
    event.preventDefault();
    if (Meteor.userId() == null) {
      document.forms["pledge-form"].reset();
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
})
