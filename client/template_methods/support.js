
Template.showSupport.shownSupport = function () {
  var giveLove = Session.get("showSupport");
  return giveLove;
}

Template.showSupport.events({
  'mouseup #donate-action, touchend #donate-action': function () {
    mixpanel.track("Donate Button");
    Session.set("donate", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true);
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("teach", false);
    Session.set("learn", false);
    Session.set("showSupport", false);
    $("#donate-action").addClass("action-on");
    $("#learn-action").removeClass("action-on");
    $("#volunteer-action").removeClass("action-on");
    $("#nav-support").addClass("selected");
    $("#nav-about").removeClass("selected");
    $("#nav-code-school").removeClass("selected");
    $("#nav-values").removeClass("selected");
    $("#nav-brand").removeClass("selected");
  },
  'mouseup #volunteer-action, touchend #volunteer-action': function () {
    mixpanel.track("Volunteer Button");
    Session.set("teach", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true);
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("donate", false);
    Session.set("learn", false);
    Session.set("showSupport", false);
    $("#volunteer-action").addClass("action-on");
    $("#learn-action").removeClass("action-on");
    $("#donate-action").removeClass("action-on");
    $("#nav-support").addClass("selected");
    $("#nav-about").removeClass("selected");
    $("#nav-code-school").removeClass("selected");
    $("#nav-values").removeClass("selected");
    $("#nav-brand").removeClass("selected");
  },
  'mouseup #learn-action, touchend #learn-action': function () {
    mixpanel.track("Learn Button");
    Session.set("learn", true);
    Session.set("divingIn", true);
    Session.set("pledgeReady", true);
    Session.set("showValues", false);
    Session.set("aboutInfo", false)
    Session.set("codeSchool", false);
    Session.set("donate", false);
    Session.set("teach", false);
    Session.set("showSupport", false);
    $("#learn-action").addClass("action-on");
    $("#donate-action").removeClass("action-on");
    $("#volunteer-action").removeClass("action-on");
    $("#nav-support").addClass("selected");
    $("#nav-about").removeClass("selected");
    $("#nav-code-school").removeClass("selected");
    $("#nav-values").removeClass("selected");
    $("#nav-brand").removeClass("selected");
  }
})