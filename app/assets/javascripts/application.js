//= require jquery
//= require jquery_ujs

$(document).ready(function(){

  // var turbolinks = require('turbolinks')

  $(".walk-me-home").on("click", function(e){
    e.preventDefault();
    $.ajax({
         url: "/sms/text_friend"
       })
       .done(function(serverResponse){
         $('#pac-input').show()

         $('.location-input').removeAttr('id')
         $('.walk-me-home').removeAttr('id')
         $('.location-input').attr('id', 'shown-div')
         $('.walk-me-home').attr('id', 'hidden-div')
       })
       .fail(function(serverResponse){
         console.log("Request to send text failed");
       })

    $.ajax({
      // Jason's server
      // url: "http://172.16.51.60:3000/start",
      // Eric's server
      url: "http://172.16.50.232:8080/start",
      crossDomain : true
    })
    .done(function(serverResponse){
    })
    .fail(function(serverResponse){
      console.log("Request to start drone failed");
    })
  })

  $("#home-safely").on("click", function(e){
    e.preventDefault();
    $.ajax({
      // Jason's server
      url: "http://172.16.51.60:3000/end",
      // Eric's server
      // url: "http://172.16.50.232:8080/end",
      crossDomain : true
    })
    .done(function(serverResponse){
      $("#home-safely").hide();
      console.log(serverResponse + " -- This is the stop-drone server response");
    })
    $.ajax({
      url: "/sms/text_friend_once_home"
    })
    .done(function(serverResponse){
      console.log(serverResponse + " -- This is the text-once-home server response");
      window.location.href = "/events";
    })
    .fail(function(serverResponse){
      console.log("Request failed");
    })

    // need to add failure response

  })

});
