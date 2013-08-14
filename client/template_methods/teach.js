
Template.letsTeach.toTeach = function () {
  var checkTeach = Session.get("teach");
  return checkTeach;
}

Template.letsTeach.events({
  'keypress #teach-input': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var thisEmail = document.getElementById("teach-input").value;
      console.log(thisEmail);
      Teachers.insert({
        email: thisEmail
      })
      $('#teach-input').remove();
      $('#email-teach-input').append('<input id="teach-input" class="span11 teach-contact-info" type="email" placeholder="Enter Email Here" autofocus />');
      $('#teach-input-confirm-msg').append('<span id="teach-email-confirm" class="span11"> You will receive the requested information via <span class="input-output"> '+ thisEmail +'</span> soon. </span>');
    }
  }
})
