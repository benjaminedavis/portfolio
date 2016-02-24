
if (Meteor.isClient) {
  $(document).ready(function() {
    $('.topnametitle')
      .css('visibility', 'visible')
      .animate({opacity: 1.0, top: '40px'}, 3000);
  });
  $(document).ready(function() {
    $('.topaddress')
      .css('visibility', 'visible')
      .animate({opacity: 1.0, top: '40px'}, 3500);
  });
  $(document).ready(function() {
    $('.toplinksect')
      .css('visibility', 'visible')
      .animate({opacity: 1.0, top: '40px'}, 4000);
  });

  $(document).ready(function() {
    $('.projects')
      .css('visibility', 'visible')
      .animate({opacity: 1.0, left: '40px'}, 4500);
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
