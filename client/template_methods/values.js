
Template.showValues.makeMeCare = function () {
  var iCare = Session.get("showValues");
  return iCare;
}

Template.showValues.events({
  'keypress #values-input': function (event) {
    mixpanel.track("Newsletter Email");
    if (event.which == 13) {
      event.preventDefault();
      var thisEmail = document.getElementById("values-input").value;
      console.log(thisEmail);
      Newsletters.insert({
        email: thisEmail
      })
      $('#values-input').remove();
      $('#values-email-input').append('<input id="values-input" class="span11 values-email-input" type="email" placeholder="Enter Email Here" autofocus />');
      $('#values-input-confirm-msg').append('<span id="values-email-confirm" class="span11"> You will receive newsletters via <span class="input-output"> '+ thisEmail +'</span></span>');
    }
  }
})

