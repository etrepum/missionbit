
Template.aboutInfo.feedTheMind = function () {
  var toKnow = Session.get("aboutInfo");
  return toKnow;
}

Template.aboutInfo.events({
  'keypress #email-input': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var thisEmail = document.getElementById("email-input").value;
      Emails.insert({
        email: thisEmail
      })
      $('#email-input').remove();
      $('#email-user-input').append('<input id="email-input" class="user-contact-info" type="email" placeholder="Stay in the Loop" autofocus />');
    }
  }
})

