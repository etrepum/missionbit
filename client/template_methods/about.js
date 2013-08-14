
Template.aboutInfo.feedTheMind = function () {
  var toKnow = Session.get("aboutInfo");
  return toKnow;
}

Template.aboutInfo.events({
  'keypress #email-input': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var thisEmail = document.getElementById("email-input").value;
      Newsletters.insert({
        email: thisEmail
      })
      $('#email-input').remove();
      $('#email-user-input').append('<input id="email-input" class="user-contact-info" type="email" placeholder="Stay in the Loop" autofocus />');
    }
  }
})

Template.aboutInfo.events({
  'mouseup #donate-about, touchend #donate-about': function () {
    Session.set("donate", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true)
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("teach", false);
    Session.set("learn", false);
  },
  'mouseup #volunteer-about, touchend #volunteer-about': function () {
    Session.set("teach", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true)
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("donate", false);
    Session.set("learn", false);
  },
  'mouseup #learn-about, touchend #learn-about': function () {
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

