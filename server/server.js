

Meteor.startup(function () {
  //Players.remove ({});
  if (Players.find().count() === 0) {
    var names = ["Live long and hack",
                 "Once you hack you never go back"];
    for (var i = 0; i < names.length; i++)
      Players.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
  }
});