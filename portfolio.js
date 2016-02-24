
if (Meteor.isClient) {
  $(document).ready(function() {
    $('.fullpage')
      .css('visibility', 'visible')
      .animate({opacity: 1.0, top: '40px'}, 3000);
  });

  Template.hello.helpers({

  });

  Template.hello.events({

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
