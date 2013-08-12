
Template.letsDonate.toDonate = function () {
  var makeDonation = Session.get("donate");
  return makeDonation;
}


Template.letsDonate.events({
  'click #donate-pledge-submit': function (event) {
    event.preventDefault();
    var pledgeValue = $('input:radio[name=pledge]:checked').val();
    // var pledgeValue = document.getElementById("pledge-form").value;
    console.log(pledgeValue);
  }
})
