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
    
    var address = window.location.href;
    var split_address = address.split('/');
    var event_id = split_address[split_address.length-3];


    $.ajax({
      // Jason's server
      url: "http://172.16.51.60:3000/end",
      // Eric's server
      // url: "http://172.16.50.232:8080/end",
      crossDomain : true
    })
    .fail(function(serverResponse){
      console.log("Request failed");
    });

    $.ajax({
      url: "/events/"+event_id,
      method: "put",
      data: {event_status: "finished"}
    })
    .done(function(serverResponse){
      console.log(serverResponse);
      window.location.href = "/events";
    })
    .fail(function(serverResponse) {
      console.log(serverResponse);
    });

  });

  $("#walk-button").on("click", function(){
    $.ajax({
      // Jason's server
      url: "http://172.16.51.60:3000/walk",
      // Eric's server
      // url: "http://172.16.50.232:8080/start",
      crossDomain : true
    })
    .done(function(serverResponse){
      console.log(serverResponse);
      console.log("Request to walk drone success");
    })
    .fail(function(serverResponse){
      console.log(serverResponse);
      console.log("Request to walk drone failed");
    })
  })


  $(".help-status").on("click", function(e){
  //   e.preventDefault();
  //   $.ajax({
  //        url: "/sms/text_friend"
  //      })
  //      .done(function(serverResponse){
  //        $('#pac-input').show()

  //        $('.location-input').removeAttr('id')
  //        $('.walk-me-home').removeAttr('id')
  //        $('.location-input').attr('id', 'shown-div')
  //        $('.walk-me-home').attr('id', 'hidden-div')
  //      })
  //      .fail(function(serverResponse){
  //        console.log("Request to send text failed");
  //      })

  //   $.ajax({
  //     // Jason's server
  //     // url: "http://172.16.51.60:3000/start",
  //     // Eric's server
  //     url: "http://172.16.50.232:8080/start",
  //     crossDomain : true
  //   })
  //   .done(function(serverResponse){
  //   })
  //   .fail(function(serverResponse){
  //     console.log("Request to start drone failed");
  //   })
  })

  $('.watch-status').on("click", function(e) {

    var address = window.location.href;
    var split_address = address.split('/');
    var event_id = split_address[split_address.length-2];

    this_div = this;

    $.ajax({
      url: "/events/"+event_id,
      method: "put",
      data: {event_status: "connected"}
    })
    .done(function(serverResponse){
      $(this_div).hide();
      console.log(serverResponse);
    })
    .fail(function(serverResponse) {
      console.log(serverResponse);
    });

  });

});

