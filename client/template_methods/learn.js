
Template.letsLearn.toLearn = function () {
  var checkLearn = Session.get("learn");
  return checkLearn;
}

Template.letsLearn.events({
  'keypress #learn-input': function (event) {
    mixpanel.track("Learn Email");
    if (event.which == 13) {
      event.preventDefault();
      var thisEmail = document.getElementById("learn-input").value;
      console.log(thisEmail);
      Students.insert({
        email: thisEmail
      })
      $('#learn-input').remove();
      $('#email-learn-input').append('<input id="learn-input" class="span11 learn-contact-info" type="email" placeholder="Enter Email Here" autofocus />');
      $('#learn-input-confirm-msg').append('<span id="learn-email-confirm" class="span11"> You will receive the requested information via <span class="input-output">'+ thisEmail +'</span> soon. </span>');
    }
  }
})

